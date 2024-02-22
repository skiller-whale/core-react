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

export const SetColorContext = createContext<Dispatch<SetStateAction<Color>>>(
  () => {},
)

const ColorProvider = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState<Color>("green")

  return (
    <ColorContext.Provider value={color}>
      <SetColorContext.Provider value={setColor}>
        {children}
      </SetColorContext.Provider>
    </ColorContext.Provider>
  )
}

export default ColorProvider
