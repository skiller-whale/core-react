import { useState } from "react";

const useBoundedValue = (initialValue: number, min: number, max: number) => {
  const [value, setValue] = useState(initialValue);

  const decrement = () => setValue(Math.max(min, value - 10));
  const increment = () => setValue(Math.min(max, value + 10));

  return [value, decrement, increment] as const;
};

export default useBoundedValue;
