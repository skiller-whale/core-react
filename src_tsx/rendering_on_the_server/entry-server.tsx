import { renderToString } from "react-dom/server"

import App from "./App"

export const render = (initialCount: number) =>
  renderToString(<App initialCount={initialCount} />)
