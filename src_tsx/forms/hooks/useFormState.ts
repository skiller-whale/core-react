import { type ChangeEvent, useState } from "react"

const useFormState = <Values extends Record<string, string | boolean>>(
  initialState: Values,
) => {
  const [state, setState] = useState(initialState)

  const setters = Object.entries(state).reduce(
    (acc, [key]) => ({
      ...acc,
      [key]: ({
        currentTarget,
      }: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >) => {
        if (
          currentTarget instanceof HTMLInputElement &&
          currentTarget.type === "checkbox"
        ) {
          setState((state) => ({ ...state, [key]: currentTarget.checked }))
        } else {
          setState((state) => ({ ...state, [key]: currentTarget.value }))
        }
      },
    }),
    {} as Record<
      keyof Values,
      (
        event: ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
      ) => void
    >,
  )

  return [state, setters] as const
}

export default useFormState
