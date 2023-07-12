import { renderToString } from "react-dom/server"
import type { Response } from "express"

import App, { type Props } from "../Components/App"

export const render = (initialProps: Props, res: Response) => {
  return renderToString(<App {...initialProps} />)
}
