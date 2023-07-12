import { createRoot } from "react-dom/client"
import WhaleFacts from "../Components/WhaleFacts"
import { facts } from "../data/facts"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<WhaleFacts facts={facts} />)
