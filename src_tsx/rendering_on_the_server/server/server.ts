import { type RequestHandler, Router } from "express";
import { loadSSR, loadTemplateFile } from "./serverHelpers.js";

const router = Router();

const removeTrailingSlash: RequestHandler = (req, res, next) => {
  if (req.originalUrl.endsWith("/")) {
    return res.redirect(req.originalUrl.slice(0, -1));
  }
  next();
};

router.get("*", removeTrailingSlash);

router.get("/facts", async (req, res, next) => {
  try {
    const template = await loadTemplateFile("../static/static.html", req, res);
    // const { render } = await loadSSR("../static/entry-static", template, res)
    // const appHtml = render()
    //
    // const ssrTemplate = template.replace(
    //   "<!-- Insert React render output here -->",
    //   appHtml
    // )

    res.status(200);
    res.send(template);
  } catch (error) {
    next(error);
  }
});

const defaultWhales = 5;

router.get("/", async (req, res, next) => {
  if (req.query.whales === undefined || typeof req.query.whales !== "string") {
    return res.redirect(`?whales=${defaultWhales}`);
  }

  const initialProps = {
    numberOfWhales: parseInt(req.query.whales) || defaultWhales,
  };

  try {
    const template = await loadTemplateFile("./index.html", req, res);

    // const { render } = await loadSSR("./entry-server", template, res)
    //
    // const appHtml = render(initialProps, res)
    //
    // const ssrTemplate = template.replace(
    //   "<!-- Insert React render output here -->",
    //   appHtml
    // )

    res.status(200);
    res.send(template);
  } catch (error) {
    next(error);
  }
});

export default router;
