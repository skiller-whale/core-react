import { useState } from "react";

const useFormState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setters = Object.entries(state).reduce(
    (acc, [key]) => ({
      ...acc,
      [key]: ({ currentTarget }) => {
        if (
          currentTarget instanceof HTMLInputElement &&
          currentTarget.type === "checkbox"
        ) {
          setState((state) => ({ ...state, [key]: currentTarget.checked }));
        } else {
          setState((state) => ({ ...state, [key]: currentTarget.value }));
        }
      },
    }),
    {},
  );

  return [state, setters];
};

export default useFormState;
