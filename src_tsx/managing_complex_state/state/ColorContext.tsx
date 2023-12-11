import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

export type Color = "blue" | "green" | "red"

export const ColorContext = null

export const SetColorContext = null

const ColorProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default ColorProvider
