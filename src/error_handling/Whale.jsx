import { useState } from "react"
import { assertIsWhale } from "./whales"

const Whale = (whale) => {
  assertIsWhale(whale)

  const { name: initialName, weight, about } = whale
  const [name, setName] = useState(initialName)
  const [tag, setTag] = useState(null)
  const tagOptions = ["", "Light", "Medium", "Heavy", "Massive"]
  const changeName = (event) => {
    setName(event.currentTarget.value)
  }

  const changeTag = (event) => {
    setTag(event.currentTarget.value)
  }

  return (
    <div className="flex justify-between border border-gray-300 p-3">
      <div className="prose">
        <h3>
          {name}, weight {weight}kg{" "}
          {tag ? (
            <span className="text-sm rounded-xl bg-blue-500 text-white px-3 py-1">
              {tag}
            </span>
          ) : null}
        </h3>
        <p>{about}</p>
      </div>
      <div className="w-52">
        <input
          type="text"
          className="w-full mb-2"
          placeholder="Edit Name"
          onChange={changeName}
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
    </div>
  )
}

export default Whale
