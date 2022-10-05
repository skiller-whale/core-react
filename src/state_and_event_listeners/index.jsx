import { createRoot } from "react-dom/client"
import { newsItems } from "./newsItems"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App newsItems={newsItems} />)
