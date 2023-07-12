import { renderToStaticMarkup } from "react-dom/server"
import WhaleFacts, { type Props } from "../Components/WhaleFacts"
import { facts } from "../data/facts"

const initialProps: Props = {
  facts,
}

export const render = () => "static rendering"
