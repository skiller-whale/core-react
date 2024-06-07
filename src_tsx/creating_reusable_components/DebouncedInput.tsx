import { debounce } from "lodash";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const DebouncedInput = ({ onChange }: Props) => {
  // Use lodash's debounce function to only call the onChangeCallback after 300ms without changes
  const debouncedCallback = debounce(onChange!, 300);

  return <input type="text" onChange={debouncedCallback} />;
};

export default DebouncedInput;
