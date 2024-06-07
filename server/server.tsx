import type { AddressInfo } from "node:net";
import path from "node:path";
import express, {
  type ErrorRequestHandler,
  type Request,
  type RequestHandler,
  type Response,
} from "express";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import renderingOnTheServerRouterJS from "../src/rendering_on_the_server/server/server.js";
import renderingOnTheServerRouterTS from "../src_tsx/rendering_on_the_server/server/server.ts";
import api from "./apiEndpoints.ts";
import modules from "./modules.ts";
import {
  injectSSRContent,
  injectScript,
  readIndexHtml,
  sourceFolder,
} from "./serverHelpers.ts";

const port = 3500;

const app = express();
app.disable("x-powered-by");

app.use("/api", api);

const viteDevServer = await createServer({
  appType: "custom",
  server: {
    middlewareMode: true,
  },
});

// needs to be before viteDevServer.middlewares to block/slow down requests
app.use(async (req, res, next) => {
  const url = req.originalUrl;
  if (
    url.includes("src") &&
    (url.includes("lazy_loading") || url.includes("deferring_updates"))
  ) {
    if (req.url.includes("Blocked")) {
      return res.status(503).send("Blocked");
    }
    if (
      url.includes("Mascot") ||
      url.includes("TermsAndConditions") ||
      url.includes("Promotion1") ||
      url.includes("Promotion2")
    ) {
      await new Promise((resolve) => {
        setTimeout(resolve, url.includes("Mascot") ? 4000 : 2000);
      });
    }
  }

  return next();
});

app.use(viteDevServer.middlewares);

app.use("*", (req, res, next) => {
  // make viteDevServer available for all requests
  res.locals.vite = viteDevServer;

  return next();
});

app.get("/", async (req, res) => {
  const url = req.url;
  const indexHtml = await readIndexHtml();
  const indexPath = path.resolve(sourceFolder.server, "pages", "Index.tsx");
  const { default: Index } = await viteDevServer.ssrLoadModule(indexPath);
  const ssrHtml = renderToStaticMarkup(<Index />);
  const injectedHtml = injectSSRContent(ssrHtml, indexHtml);
  const template = await viteDevServer.transformIndexHtml(url, injectedHtml);
  res.statusCode = 200;
  res.end(template);
});

const getPageContent = async (
  language: "js" | "ts",
  req: Request,
  res: Response,
) => {
  const url = req.originalUrl;
  const indexHtml = await readIndexHtml();
  const script = `/${sourceFolder[language]}/${req.params.page}/index.${language}x`;
  const modulePath = path.resolve(sourceFolder.server, "pages", "Module.tsx");
  const { default: Module } = await viteDevServer.ssrLoadModule(modulePath);
  const ssrHtml = renderToStaticMarkup(
    <Module language={language} moduleKey={req.params.page} />,
  );

  const injectedHtml1 = injectScript(script, indexHtml);
  const injectedHtml2 = injectSSRContent(ssrHtml, injectedHtml1);
  const template = await viteDevServer.transformIndexHtml(url, injectedHtml2);
  res.statusCode = 200;
  res.end(template);
};

const getModuleContentTS: RequestHandler = (req, res) =>
  getPageContent("ts", req, res);

const getModuleContentJS: RequestHandler = (req, res) =>
  getPageContent("js", req, res);

const redirectInvalidModule: RequestHandler = (req, res, next) => {
  if (!Object.keys(modules).includes(req.params.page)) {
    return res.redirect("/");
  }

  return next();
};

const handleSSRError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    viteDevServer.ssrFixStacktrace(err);
  }
  next(err);
};

app.use("/ts/rendering_on_the_server/", [
  renderingOnTheServerRouterTS,
  handleSSRError,
]);

app.use("/js/rendering_on_the_server/", [
  renderingOnTheServerRouterJS,
  handleSSRError,
]);

app.get("/ts/:page", [redirectInvalidModule, getModuleContentTS]);
app.get("/js/:page", [redirectInvalidModule, getModuleContentJS]);

const server = app.listen(port, () => {
  const address = server.address() as AddressInfo;
  console.log(`Listening on http://localhost:${address.port}`);
  console.log("Open your browser.");
});
