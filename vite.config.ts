import { readFile } from "node:fs/promises"
import path from "node:path"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

export const source_folder_ts = "src_tsx"

export const source_folder_js = "src"

export const source_folder_server = "server"

export const readIndexHtml = () =>
  readFile(path.resolve(source_folder_server, "index.html"), "utf-8")

export const injectContent = (
  injector: string,
  template: string,
  target = "head"
) => {
  return template.replace(`</${target}>`, `${injector}</${target}>`)
}

export const injectPage = (page: string, template: string) => {
  const injector = `<script type="module" src="${page}"></script>`

  return injectContent(injector, template)
}

export default defineConfig(({ command, mode }) => {
  const config = {
    server: {
      hmr: { port: 3501 },
    },
    preview: {
      host: process.env.PREVIEW_HOST, // ensure that the network is only exposed in Docker, not locally.
      port: 3502,
    },
    plugins: [react()],
    build: {
      minify: false,
    },
  }
  if (command === "serve") {
    return config
  }

  // for use with code_splitting_and_lazy_loading exercise which asks to build a production bundle of the app

  const env = loadEnv(mode, process.cwd(), "")
  const isTs = env.SKILLERWHALE_LANG === "ts"

  return {
    ...config,
    build: {
      ...config.build,
      rollupOptions: {
        input: {
          code_splitting_and_lazy_loading: "index.html",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[hash].js",
        },
      },
    },
    plugins: [
      {
        name: "build_code_splitting_and_lazy_loading",
        enforce: "pre",
        resolveId(id) {
          if (id !== "index.html") return null

          return id
        },
        load(id) {
          if (id !== "index.html") return null

          return readIndexHtml()
        },
        transform(code, id) {
          if (id !== "index.html") return null

          return injectPage(
            `./${
              isTs ? source_folder_ts : source_folder_js
            }/code_splitting_and_lazy_loading/index.${isTs ? "tsx" : "jsx"}`,
            code
          )
        },
      },
      ...config.plugins,
    ],
  }
})
