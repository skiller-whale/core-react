import { createRoot } from "react-dom/client"

const App = () => (
  <div className="p-3">
    <div className="alert alert-success">
      Hello Whale! It looks like you're all set up.
    </div>
  </div>
)
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
