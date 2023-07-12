import { renderToString } from "react-dom/server"
import App from "../Components/App"

export const render = (initialProps, res) => {
  return renderToString(<App {...initialProps} />)
}
