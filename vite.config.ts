/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: {
      port: 3501,
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      lib: "/lib",
      complete: "/_complete",
      "src_js": "/src_js",
      "src_ts": "/src_ts",
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
});
