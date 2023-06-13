import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { Router } from "express"

const router = Router()

export default (viteDevServer, fileExtension) => {
  router.get("/rendering_on_the_server", async (req, res, next) => {
    const url = req.originalUrl
    try {
      const filePath = fileURLToPath(new URL("./index.html", import.meta.url))
      const template = await readFile(filePath, "utf-8")
      const viteTemplate = await viteDevServer.transformIndexHtml(url, template)
      const entryPath = fileURLToPath(
        new URL(`./entry-server.${fileExtension}`, import.meta.url)
      )

      const { render } = await viteDevServer.ssrLoadModule(entryPath)
      const appHtml = await render(1)
      const html = viteTemplate.replace(
        "<!-- Insert React render output here -->",
        appHtml
      )
      res.status(200)
      res.end(html)
    } catch (e) {
      if (e instanceof Error) viteDevServer.ssrFixStacktrace(e)
      next(e)
    }
  })

  return router
}
