import { useRef, useState } from "react"
import WhaleInput from "./WhaleInput"

const Whale = ({ name, weight: initialWeight, about }) => {
  const [weight, setWeight] = useState(initialWeight)
  const weightInput = useRef()
  const changeWeight = (event) => {
    setWeight(parseInt(event.currentTarget.value))
  }
  return (
    <div
      className="flex flex-col gap-3 border border-gray-300 p-3"
      onClick={() => weightInput.current.focus()}
    >
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex gap-3 items-baseline">
          <label>Weight</label>
          <input
            ref={weightInput}
            type="number"
            value={weight}
            onInput={changeWeight}
          />
        </div>
      </div>
      <p>{about}</p>
    </div>
  )
}
export default Whale