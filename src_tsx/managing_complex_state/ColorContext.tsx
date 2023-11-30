import { type Dispatch, type SetStateAction, createContext } from "react"

export type color = "blue" | "green" | "red"

const ColorContext = createContext<color>("green")
const SetColorContext = createContext<Dispatch<SetStateAction<color>>>(() => {})

export { SetColorContext }

export default ColorContext
