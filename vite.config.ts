/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { Server } from "node:http";
import { defineConfig } from "vite";

const hostedEnvHost = process.env.SW_HOSTNAME_PORT_3500;
const hostedEnvHotReloadHost = process.env.SW_HOSTNAME_PORT_3501;

export default defineConfig({
  server: {
    allowedHosts: hostedEnvHost ? [hostedEnvHost] : undefined,
    hmr: hostedEnvHotReloadHost
      ? {
          clientPort: 443,
          host: hostedEnvHotReloadHost,
          server: new Server().listen({
            port: 3501,
            hostname: hostedEnvHotReloadHost,
          }),
        }
      : {
          port: 3501,
        },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      lib: "/lib",
      complete: "/_complete",
      src_js: "/src_js",
      src_ts: "/src_ts",
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
});
