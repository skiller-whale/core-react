import { useState } from "react"

const App = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-start">
        <button onClick={() => setCount((count) => count + 1)}>++</button>
        {count}
      </div>
    </div>
  )
}

export default App
