import { type FC, type ChangeEventHandler, useState } from "react"
import { type WhaleProps } from "./whales"
import { CollapsibleContainer, TwoColumns } from "./styles"

const Whale: FC<WhaleProps> = ({ name, weight: initialWeight, about }) => {
  const [weight, setWeight] = useState(initialWeight)
  const [tag, setTag] = useState(null)

  const tagOptions = ["", "Light", "Medium", "Heavy", "Massive"]

  const changeWeight: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeight(parseInt(event.currentTarget.value))
  }

  const changeTag: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTag(event.currentTarget.value)
  }

  const summary = (
    <div className="prose">
      <h4>
        Weight: {weight}kg{" "}
        {tag ? (
          <span className="text-sm rounded-xl bg-blue-500 text-white px-3 py-1">
            {tag}
          </span>
        ) : null}
      </h4>
      <p>{about}</p>
    </div>
  )

  const form = (
    <div>
      <input
        type="number"
        className="w-full mb-2"
        value={weight}
        placeholder="Edit Weight"
        onChange={changeWeight}
      />
      <div className="flex gap-3 items-baseline">
        <label htmlFor="tag-select">Select Tag</label>
        <select className="grow" id="tag-select" onChange={changeTag}>
          {tagOptions.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </div>
    </div>
  )

  const columns = (
    <div className="flex gap-3 p-3">
      <div className="flex-1">{summary}</div>
      <div className="w-52">{form}</div>
    </div>
  )

  return (
    <div className="border border-gray-300 mb-3">
      <div className="flex justify-between px-3 py-2 bg-gray-200 border-b border-gray-300 cursor-pointer">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span>{"▲" ?? "▼"}</span>
      </div>
      <div className={"" ?? "hidden"}>{columns}</div>
    </div>
  )
}

export default Whale
