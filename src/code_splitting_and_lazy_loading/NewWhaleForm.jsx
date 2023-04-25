import React, { lazy, useState, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import Mascot from "./Mascot"
import SmallPrint from "./SmallPrint"

const NewWhaleForm = ({ addWhale }) => {
  const [name, setName] = useState("")
  const [weight, setWeight] = useState(0)
  const [about, setAbout] = useState("")
  const [acceptedTC, setAcceptedTC] = useState(false)
  const [openedTC, setOpenedTC] = useState(false)

  const changeName = (event) => {
    setName(event.currentTarget.value)
  }

  const changeWeight = (event) => {
    setWeight(parseInt(event.currentTarget.value))
  }

  const changeAbout = (event) => {
    setAbout(event.currentTarget.value)
  }

  const onClickDetails = (event) => {
    event.preventDefault()
    setOpenedTC((prevState) => !prevState)
  }

  const createNewWhale = () => {
    addWhale({
      id: name,
      name,
      weight,
      about,
    })
    setName("")
    setWeight(0)
    setAbout("")
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
      <div className="flex justify-between">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className=" mr-2"
            checked={acceptedTC}
            onChange={(event) => setAcceptedTC(event.target.checked)}
          />
          Accept Terms and Conditions
        </label>
        <button
          className="self-end bg-blue-500 text-white p-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={createNewWhale}
          disabled={!acceptedTC || !name || !about}
        >
          New Whale
        </button>
      </div>
      <details open={openedTC} className="mt-3">
        <summary className="cursor-pointer" onClick={onClickDetails}>
          Read terms and conditions
        </summary>
        <div className="m-3">
          <Mascot />
          <SmallPrint />
        </div>
      </details>
    </div>
  )
}

export default NewWhaleForm
