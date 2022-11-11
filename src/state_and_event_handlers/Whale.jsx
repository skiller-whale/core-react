import { useState } from "react"

const Whale = ({ name: initialName, weight, about }) => {
  const name = initialName
  const tag = null
  const tagOptions = ["", "Light", "Medium", "Heavy", "Massive"]

  return (
    <div className="flex gap-3 items-start border border-gray-300 p-3 mb-3">
      <div className="flex-1">
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
      </div>
      <div className="w-52">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 mb-3 float-right">
          ×
        </button>
        <input type="text" className="w-full mb-2" placeholder="Edit Name" />
        <div className="flex gap-3 items-baseline">
          <label htmlFor="tag-select">Select Tag</label>
          <select className="grow" id="tag-select">
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
