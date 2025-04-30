import { useState } from "react";

const useBoundedValue = (initialValue, min, max) => {
  const [value, setValue] = useState(initialValue);

  const decrement = () => setValue(Math.max(min, value - 10));
  const increment = () => setValue(Math.min(max, value + 10));

  return [value, decrement, increment];
};

export default useBoundedValue;
