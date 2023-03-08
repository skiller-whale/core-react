import { type FC, type ChangeEventHandler, useState } from "react"
import { type WhaleProps } from "./whales"
import { setPageTitle } from "./setPageTitle"

type Props = {
  addWhale: (whale: WhaleProps, position: number | null) => void
  numberOfWhales: number
}

const NewWhaleForm: FC<Props> = ({ addWhale, numberOfWhales }) => {
  const [name, setName] = useState("")

  const changeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.currentTarget.value)
  }

  const [weight, setWeight] = useState(0)
  const changeWeight: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeight(parseInt(event.currentTarget.value) || 0)
  }

  const [about, setAbout] = useState("")
  const changeAbout: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setAbout(event.currentTarget.value)
  }

  const [position, setPosition] = useState<number>(null)
  const loopValue = (value: number) => {
    const modulus = numberOfWhales + 1
    return ((value % modulus) + modulus) % modulus
  }

  const setNewPosition = (value: any) => {
    const parsedValue = parseInt(value)
    if (isNaN(parsedValue)) {
      setPosition(null)
      return
    }
    setPosition(loopValue(parsedValue))
  }

  const incrementPosition = () => {
    setPosition((value) => loopValue((value ?? 0) + 1))
  }
  const decrementPosition = () => {
    setPosition((value) => loopValue((value ?? 0) - 1))
  }

  const changePosition: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewPosition(event.currentTarget.value)
  }

  const createNewWhale = () => {
    addWhale(
      {
        id: name,
        name,
        weight,
        about,
      },
      position
    )

    setName("")
    setWeight(0)
    setAbout("")
    setPosition(null)
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
