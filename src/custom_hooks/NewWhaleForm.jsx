import { useState } from "react"
import { setPageTitle } from "./hooks"

const NewWhaleForm = ({ addWhale, numberOfWhales }) => {
  // name
  const [name, setName] = useState("")
  const changeName = (event) => {
    setName(event.currentTarget.value)
  }

  // weight
  const [weight, setWeight] = useState(0)
  const changeWeight = (event) => {
    setWeight(parseInt(event.currentTarget.value) || 0)
  }

  // about
  const [about, setAbout] = useState("")
  const changeAbout = (event) => {
    setAbout(event.currentTarget.value)
  }

  // position
  const [position, _setPosition] = useState(numberOfWhales)
  const loopValue = (value) => {
    if (value < 0) return numberOfWhales
    if (value > numberOfWhales) return 0

    return value
  }

  const setPosition = (valueOrFunction) => {
    if (typeof valueOrFunction === "function") {
      _setPosition((value) => loopValue(valueOrFunction(value)))
    } else {
      _setPosition(loopValue(valueOrFunction))
    }
  }

  const incrementPosition = () => {
    setPosition((value) => value + 1)
  }

  const decrementPosition = () => {
    setPosition((value) => value - 1)
  }

  const changePosition = (event) => {
    setPosition(parseInt(event.currentTarget.value))
  }

  // form submit handler
  const createNewWhale = () => {
    addWhale(
      {
        id: name,
        name,
        weight,
        about,
      },
      position,
    )
    setName("")
    setWeight(0)
    setAbout("")
    setPosition(0)
    setPageTitle(`New Whale: ${name}`)
  }

  return (
    <div className="flex flex-col gap-3 border border-gray-300 p-3 bg-gray-100">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="name"
          className="border-0"
          onChange={changeName}
          value={name}
        />
        <div className="flex gap-3 items-baseline">
          <label>Position</label>
          <button
            className="text-3xl font-bold text-blue-500 hover:text-blue-700"
            onClick={decrementPosition}
          >
            -
          </button>
          <input
            type="number"
            className="border-0 w-16"
            onChange={changePosition}
            value={position ?? ""}
          />
          <button
            className="text-3xl font-bold text-blue-500 hover:text-blue-700"
            onClick={incrementPosition}
          >
            +
          </button>
        </div>
        <div className="flex gap-3 items-baseline">
          <label>Weight</label>
          <input
            type="number"
            className="border-0"
            onChange={changeWeight}
            value={weight}
          />
        </div>
      </div>
      <textarea
        placeholder="about"
        className="border-0"
        onChange={changeAbout}
        value={about}
      ></textarea>
      <button
        className="self-end bg-blue-500 text-white p-2 hover:bg-blue-700"
        onClick={createNewWhale}
      >
        New Whale
      </button>
    </div>
  )
}

export default NewWhaleForm
