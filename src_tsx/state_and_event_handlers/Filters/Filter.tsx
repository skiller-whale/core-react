import type { FC, PropsWithChildren } from "react"
import GreenFilter from "./GreenFilter"
import BlueFilter from "./BlueFilter"
import RedFilter from "./RedFilter"

type FilterProps = {
  color: Color
}

export type Color = "green" | "blue" | "red"

const Filter: FC<PropsWithChildren<FilterProps>> = ({ color, children }) => {
  let FilterComponent
  if (color === "green") {
    FilterComponent = GreenFilter
  } else if (color === "blue") {
    FilterComponent = BlueFilter
  } else {
    FilterComponent = RedFilter
  }

  return <FilterComponent>{children}</FilterComponent>
}

export default Filter
