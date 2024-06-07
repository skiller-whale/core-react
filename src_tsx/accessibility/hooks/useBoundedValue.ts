import { useState } from "react";

const useBoundedValue = (initialValue: number, min = -100, max = 100) => {
  const [value, setValue] = useState(initialValue);
  const minus = () => setValue((value) => Math.max(min, value - 10));
  const plus = () => setValue((value) => Math.min(max, value + 10));

  return [value, minus, plus] as const;
};

export default useBoundedValue;
