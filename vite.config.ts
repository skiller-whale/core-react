/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const hostedEnvHost = process.env.SW_HOSTNAME_PORT_3500;

export default defineConfig({
  server: {
    allowedHosts: hostedEnvHost ? [hostedEnvHost] : undefined,
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
