import { createContext } from "react"

const ColorContext = createContext("green")
const SetColorContext = createContext(() => {})

export { SetColorContext }

export default ColorContext
