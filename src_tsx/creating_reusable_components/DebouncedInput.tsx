import type { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"
import { debounce } from "lodash"

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const DebouncedInput: FC<Props> = ({ onChange }) => {
  // Use lodash's debounce function to only call the onChangeCallback after 300ms without changes
  const debouncedCallback = debounce(onChange!, 300)

  return <input type="text" onChange={debouncedCallback} />
}

export default DebouncedInput
