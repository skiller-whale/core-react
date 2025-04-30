import express from "express";
import { createServer as createViteServer } from "vite";
import createApiRouter from "./api.ts";
import createModulesRouter from "./modules.ts";

const app = express();

const vite = await createViteServer({
  appType: "custom",
  server: { middlewareMode: true },
});

app.use(vite.middlewares);
app.use("/api", createApiRouter());
app.use(createModulesRouter(vite));

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
