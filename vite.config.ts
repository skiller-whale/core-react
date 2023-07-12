import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import {
  injectScript,
  readIndexHtml,
  sourceFolder,
} from "./server/serverHelpers"

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

          return injectScript(
            `./${
              isTs ? sourceFolder.ts : sourceFolder.js
            }/code_splitting_and_lazy_loading/index.${isTs ? "tsx" : "jsx"}`,
            code
          )
        },
      },
      ...config.plugins,
    ],
  }
})
