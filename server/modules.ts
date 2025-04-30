import { type Request, type Response, Router } from "express";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
import type { ViteDevServer } from "vite";
import { type Language, type ModuleKey, modules } from "./types.ts";

const createModulesRouter = (vite: ViteDevServer) => {
  const router = Router();

  router.get("/", (req, res) => index(vite, req, res));
  router.get("/js/:moduleKey", (req, res) => module(vite, "js", req, res));
  router.get("/ts/:moduleKey", (req, res) => module(vite, "ts", req, res));

  return router;
};

export default createModulesRouter;

const index = async (vite: ViteDevServer, req: Request, res: Response) => {
  const template = await readIndexHtml();
  const render = await loadPageModule(vite, "Index.tsx");

  const body = render();
  const html = template.replace("<!--ssr_body-->", body);

  const response = await vite.transformIndexHtml(req.url, html);
  res.end(response);
};

const module = async (
  vite: ViteDevServer,
  language: Language,
  req: Request,
  res: Response
) => {
  const moduleKey = req.params.moduleKey as ModuleKey;
  if (!(moduleKey in modules)) {
    return res.redirect("/");
  }

  const template = await readIndexHtml();
  const render = await loadPageModule(vite, "Module.tsx");

  const body = render(language, moduleKey);
  const src =
    existsSync("_complete") &&
    typeof req.query.exercise === "string" &&
    ["1", "2", "3", "4", "5"].includes(req.query.exercise)
      ? `/_complete/${moduleKey}/exercise${req.query.exercise}/index.tsx`
      : `/src_${language}/${moduleKey}/index.jsx`;
  const script = `<script type="module" defer src="${src}"></script>`;
  const html = template
    .replace("<!--ssr_script-->", script)
    .replace("<!--ssr_body-->", body);

  const response = await vite.transformIndexHtml(req.url, html);
  res.end(response);
};

const readIndexHtml = () =>
  readFile(resolve("server", "static", "index.html"), "utf-8");

const loadPageModule = async (vite: ViteDevServer, path: string) => {
  const indexPath = resolve("server", "pages", path);
  const { render } = await vite.ssrLoadModule(indexPath);
  return render;
};
