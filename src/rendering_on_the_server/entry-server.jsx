import { renderToString } from "react-dom/server"
import App from "./App"

export const render = (initialCount) =>
  renderToString(<App initialCount={initialCount} />)
