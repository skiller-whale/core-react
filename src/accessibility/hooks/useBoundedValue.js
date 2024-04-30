import { useState } from "react"

const useBoundedValue = (initialValue, min = -100, max = 100) => {
  const [value, setValue] = useState(initialValue)
  const minus = () => setValue((value) => Math.max(min, value - 10))
  const plus = () => setValue((value) => Math.min(max, value + 10))

  return [value, minus, plus]
}

export default useBoundedValue
