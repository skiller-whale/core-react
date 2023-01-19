import { createRoot } from "react-dom/client"

const App = () => (
  <div className="p-3 bg-green-200 text-green-700 border border-green-700">
    Hello Whale! It looks like you're all set up.
  </div>
)

const container = document.getElementById("root")!
const root = createRoot(container)
root.render(<App />)
