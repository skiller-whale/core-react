import { createRoot } from "react-dom/client"
import App from "./App"
import { whales } from "./whales"

const container = document.getElementById("root")!
const root = createRoot(container)
root.render(<App whales={whales} />)
