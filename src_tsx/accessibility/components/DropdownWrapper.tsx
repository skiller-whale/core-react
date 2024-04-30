import type { ComponentProps, RefObject } from "react"
import type { DropdownRef } from "./Dropdown"

type Props = ComponentProps<"div"> & {
  dropdownRef: RefObject<DropdownRef>
}

const DropdownWrapper = ({ dropdownRef, children, ...rest }: Props) => (
  <div
    onClick={() => dropdownRef.current?.close()}
    {...rest}
  >
    {children}
  </div>
)

export default DropdownWrapper
