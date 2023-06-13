import path from "node:path"
import type { AddressInfo } from "node:net"
import express, {
  type Request,
  type RequestHandler,
  type Response,
} from "express"
import { createServer } from "vite"
import {
  injectContent,
  injectPage,
  readIndexHtml,
  source_folder_js,
  source_folder_server,
  source_folder_ts,
} from "../vite.config.ts"
import createRenderingOnTheServerRouterTS from "../src_tsx/rendering_on_the_server/server.ts"
import api from "./apiEndpoints.ts"
import modules from "./modules.ts"

const port = 3500

const app = express()
app.disable("x-powered-by")

app.use("/api", api)

const viteDevServer = await createServer({
  appType: "custom",
  server: {
    middlewareMode: true,
  },
})

// needs to be before viteDevServer.middlewares to block/slow down requests
app.use(async (req, res, next) => {
  const url = req.originalUrl
  if (
    url.includes("src") &&
    (url.includes("lazy_loading") || url.includes("deferring_updates"))
  ) {
    if (req.url.includes("Blocked")) {
      return res.status(503).send("Blocked")
    }
    if (
      url.includes("Mascot") ||
      url.includes("TermsAndConditions") ||
      url.includes("Promotion1") ||
      url.includes("Promotion2")
    ) {
      await new Promise((resolve) => {
        setTimeout(resolve, url.includes("Mascot") ? 4000 : 2000)
      })
    }
  }
  next()
})

app.use(viteDevServer.middlewares)

const getPageContent = async (page: string, req: Request, res: Response) => {
  const url = req.originalUrl
  const indexHtml = await readIndexHtml()
  const injectedHtml = injectPage(page, indexHtml)
  const template = await viteDevServer.transformIndexHtml(url, injectedHtml)
  res.statusCode = 200
  res.end(template)
}

const getModuleContentTS: RequestHandler = (req, res) =>
  getPageContent(`/${source_folder_ts}/${req.params.page}/index.tsx`, req, res)

const getModuleContentJS: RequestHandler = (req, res) =>
  getPageContent(`/${source_folder_js}/${req.params.page}/index.jsx`, req, res)

const redirectInvalidModule: RequestHandler = (req, res, next) => {
  if (!modules.includes(req.params.page)) {
    return res.redirect("/")
  }
  next()
}

app.get("/", async (req, res) => {
  const url = req.url
  const indexHtml = await readIndexHtml()
  const homePath = path.resolve(source_folder_server, "index.tsx")
  const { renderHome } = await viteDevServer.ssrLoadModule(homePath)
  const ssrHtml = renderHome({ modules })
  const injectedHtml = injectContent(ssrHtml, indexHtml, "div")
  const template = await viteDevServer.transformIndexHtml(url, injectedHtml)
  res.statusCode = 200
  res.end(template)
})

app.use("/ts", createRenderingOnTheServerRouterTS(viteDevServer, "tsx"))

try {
  const { default: createRenderingOnTheServerRouterJS } = await import(
    // @ts-ignore
    "../src/rendering_on_the_server/server.js"
  )
  app.use(createRenderingOnTheServerRouterJS(viteDevServer, "jsx"))
} catch (e) {
  if (!(e instanceof Error && e.message.startsWith("Cannot find module"))) {
    throw e
  }
  console.log(
    "Cannot find module '/src/rendering_on_the_server/server.js'. Run `npm run compile` to generate it."
  )
}

app.get("/ts/:page", [redirectInvalidModule, getModuleContentTS])
app.get("/:page", [redirectInvalidModule, getModuleContentJS])

const server = app.listen(port, () => {
  const address = server.address() as AddressInfo
  console.log(`Listening on http://localhost:${address.port}`)
  console.log("Open your browser.")
})
