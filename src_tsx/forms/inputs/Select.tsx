import type { SelectHTMLAttributes } from "react"
import camelCaseToString from "../utils/camelCaseToString"

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  options: readonly string[]
}

const Select = ({ label, id, options, ...rest }: Props) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={id} className="font-semibold cursor-pointer">
      {label}
    </label>
    <select id={id} {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>
          {camelCaseToString(option)}
        </option>
      ))}
    </select>
  </div>
)

export default Select
