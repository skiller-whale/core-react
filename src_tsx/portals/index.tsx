import { createRoot } from "react-dom/client"
import { planets } from "./planets"
import App from "./App"

const container = document.getElementById("root")!
const root = createRoot(container)
root.render(<App planets={planets} />)
