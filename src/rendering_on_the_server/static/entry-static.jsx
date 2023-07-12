import { renderToStaticMarkup } from "react-dom/server"
import WhaleFacts from "../Components/WhaleFacts"
import { facts } from "../data/facts"

const initialProps = {
  facts,
}

export const render = () => "static rendering"
