import type { TextareaHTMLAttributes } from "react"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

const TextArea = ({ label, id, ...rest }: Props) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <textarea id={id} {...rest}></textarea>
  </div>
)

export default TextArea
