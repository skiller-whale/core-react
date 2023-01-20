import { useRef, useState } from "react"

const Whale = ({ name, weight: initialWeight, about }) => {
  const [weight, setWeight] = useState(initialWeight)

  const changeWeight = (event) => {
    setWeight(parseInt(event.currentTarget.value))
  }

  return (
    <div className="flex flex-col gap-3 border border-gray-300 p-3">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex gap-3 items-baseline">
          <label>Weight</label>
          <input type="number" value={weight} onInput={changeWeight} />
        </div>
      </div>
      <p>{about}</p>
    </div>
  )
}

export default Whale
