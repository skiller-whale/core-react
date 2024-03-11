import path from "node:path"
import type { AddressInfo } from "node:net"
import express, {
  type ErrorRequestHandler,
  type Request,
  type RequestHandler,
  type Response,
} from "express"
import { createServer } from "vite"
import renderingOnTheServerRouterTS from "../src_tsx/rendering_on_the_server/server/server.ts"
import {
  injectSSRContent,
  injectScript,
  readIndexHtml,
  sourceFolder,
} from "./serverHelpers.ts"
import api from "./apiEndpoints.ts"
import modules from "./modules.ts"
import { logErrorToConsole } from "./tsServerError.ts"

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

  return next()
})

app.use(viteDevServer.middlewares)

app.use("*", (req, res, next) => {
  // make viteDevServer available for all requests
  res.locals.vite = viteDevServer

  return next()
})

app.get("/", async (req, res) => {
  const url = req.url
  const indexHtml = await readIndexHtml()
  const homePath = path.resolve(sourceFolder.server, "index.tsx")
  const { renderHome } = await viteDevServer.ssrLoadModule(homePath)
  const ssrHtml = renderHome({ modules })
  const injectedHtml = injectSSRContent(ssrHtml, indexHtml)
  const template = await viteDevServer.transformIndexHtml(url, injectedHtml)
  res.statusCode = 200
  res.end(template)
})

const getPageContent = async (script: string, req: Request, res: Response) => {
  const url = req.originalUrl
  const indexHtml = await readIndexHtml()
  const injectedHtml = injectScript(script, indexHtml)
  const template = await viteDevServer.transformIndexHtml(url, injectedHtml)
  res.statusCode = 200
  res.end(template)
}

const getModuleContentTS: RequestHandler = (req, res) =>
  getPageContent(`/${sourceFolder.ts}/${req.params.page}/index.tsx`, req, res)

const getModuleContentJS: RequestHandler = (req, res) =>
  getPageContent(`/${sourceFolder.js}/${req.params.page}/index.jsx`, req, res)

const redirectInvalidModule: RequestHandler = (req, res, next) => {
  if (!Object.keys(modules).includes(req.params.page)) {
    return res.redirect("/")
  }

  return next()
}

const handleSSRError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    viteDevServer.ssrFixStacktrace(err)
  }
  next(err)
}

app.use("/ts/rendering_on_the_server/", [
  renderingOnTheServerRouterTS,
  handleSSRError,
])

try {
  const { default: renderingOnTheServerRouterJS } = await import(
    // @ts-ignore
    "../src/rendering_on_the_server/server/server.js"
  )
  app.use("/rendering_on_the_server/", [
    renderingOnTheServerRouterJS,
    handleSSRError,
  ])
} catch (e) {
  if (!(e instanceof Error && e.message.startsWith("Cannot find module"))) {
    throw e
  }
  logErrorToConsole(
    `${e.message.split(" imported")[0]}
    Run \`npm run compile\` to generate it.`,
  )
}

app.get("/ts/:page", [redirectInvalidModule, getModuleContentTS])
app.get("/:page", [redirectInvalidModule, getModuleContentJS])

const server = app.listen(port, () => {
  const address = server.address() as AddressInfo
  console.log(`Listening on http://localhost:${address.port}`)
  console.log("Open your browser.")
})
