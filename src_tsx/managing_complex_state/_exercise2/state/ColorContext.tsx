import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

export type Color = "green" | "blue" | "red"

export const ColorContext = createContext<Color>("green")

export const SetColorContext = null

const ColorProvider = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState<Color>("green")

  return <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
}

export default ColorProvider
