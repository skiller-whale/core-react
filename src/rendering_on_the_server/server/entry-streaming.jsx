import { renderToPipeableStream } from "react-dom/server";
import App from "../Components/App";

export const render = (initialProps, res) => {
  const { pipe, abort } = renderToPipeableStream(<App {...initialProps} />, {
    // bootstrapScriptContent:
    //   "window.__INITIAL_PROPS__ = " + JSON.stringify(initialProps),
    bootstrapModules: [],
    onShellReady() {
      res.status(200);
      pipe(res);
    },
  });
};
