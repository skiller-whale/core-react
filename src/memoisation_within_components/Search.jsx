import { useRef } from "react"

export const Search = ({ setSearchTerm }) => {
  const searchTermInput = useRef()

  return (
    <div className="flex gap-3 justify-end">
      <input type="text" ref={searchTermInput} />
      <button
        type="button"
        className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-800"
        onClick={() => {
          setSearchTerm(searchTermInput.current.value)
        }}
      >
        Search
      </button>
    </div>
  )
}
