import { renderToPipeableStream } from "react-dom/server"
import type { Response } from "express"

import App, { type Props } from "../Components/App"

export const render = (initialProps: Props, res: Response) => {
  const { pipe, abort } = renderToPipeableStream(<App {...initialProps} />, {
    // bootstrapScriptContent:
    //   "window.__INITIAL_PROPS__ = " + JSON.stringify(initialProps),
    bootstrapModules: [],
    onShellReady() {
      res.status(200)
      pipe(res)
    },
  })
}
