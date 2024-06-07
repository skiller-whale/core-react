import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export const sourceFolder = {
  ts: "src_tsx",
  js: "src",
  server: "server",
} as const;

export const readIndexHtml = () =>
  readFile(resolve(sourceFolder.server, "index.html"), "utf-8");

export const injectSSRContent = (content: string, template: string) => {
  return template.replace("<!-- Insert React render output here -->", content);
};

export const injectScript = (script: string, template: string) => {
  const content = `<script type="module" src="${script}"></script>`;

  return template.replace("<!-- Insert React JavaScript here -->", content);
};
