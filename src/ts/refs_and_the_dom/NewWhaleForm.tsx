import { type FC, type ChangeEventHandler, useRef, useState } from "react"
import { type WhaleProps } from "./whales"

type Props = {
  addWhale: (whale: WhaleProps) => void
}

const NewWhaleForm: FC<Props> = ({ addWhale }) => {
  const [name, setName] = useState("")
  const [weight, setWeight] = useState(0)
  const [about, setAbout] = useState("")

  const changeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.currentTarget.value)
  }

  const changeWeight: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeight(parseInt(event.currentTarget.value))
  }

  const changeAbout: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setAbout(event.currentTarget.value)
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
        />
        <div className="flex gap-3 items-baseline">
          <label>Weight</label>
          <input type="number" className="border-0" onChange={changeWeight} />
        </div>
      </div>
      <textarea
        placeholder="about"
        className="border-0"
        onChange={changeAbout}
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
