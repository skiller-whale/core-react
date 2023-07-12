import { fileURLToPath } from "node:url"
import { readFile } from "node:fs/promises"
import type { ViteDevServer } from "vite"
import type { Request, Response } from "express"

// Vite-specific code lives in this file
export const loadTemplateFile = async (
  filePath: string,
  req: Request,
  res: Response
) => {
  const url = req.originalUrl
  const viteDevServer = res.locals.vite as ViteDevServer

  const fullFilePath = fileURLToPath(new URL(filePath, import.meta.url))
  const template = await readFile(fullFilePath, "utf-8")

  return await viteDevServer.transformIndexHtml(url, template)
}

const isTs = import.meta.url.endsWith("ts")

const fileExtension: "tsx" | "jsx" = isTs ? "tsx" : "jsx"
const source_folder = isTs ? "src_tsx" : "src"

export const loadSSR = async (
  entryPath: string,
  viteTemplate: string,
  res: Response
) => {
  const entryFullPath = fileURLToPath(
    new URL(`${entryPath}.${fileExtension}`, import.meta.url)
  )

  const viteDevServer = res.locals.vite as ViteDevServer

  // required to invalidate cache and allow lazy loading to trigger suspense on the server consistently
  const whaleCard = viteDevServer.moduleGraph.urlToModuleMap.get(
    `/${source_folder}/rendering_on_the_server/Components/WhaleCard.${fileExtension}`
  )
  if (whaleCard) {
    await viteDevServer.reloadModule(whaleCard)
  }

  return await viteDevServer.ssrLoadModule(entryFullPath)
}
