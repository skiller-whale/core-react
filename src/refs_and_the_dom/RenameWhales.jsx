import { useRef } from "react"

const moveFocus = (inputElements, increment) => {
  let index = inputElements.findIndex(
    (input) => input === document.activeElement,
  )
  index += increment
  if (index >= inputElements.length) {
    index %= inputElements.length
  } else if (index < 0) {
    index += inputElements.length
  }
  inputElements[index].focus()
  inputElements[index].select()
}

const RenameWhales = ({ whales, setWhaleName }) => {
  const moveCursor = (event) => {
    switch (event.key) {
      case "ArrowUp":
        break
      case "ArrowDown":
        break
    }
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-gray-100 border border-gray-300">
      <h2 className="text-lg font-semibold">Rename Whales</h2>
      <ul className="flex flex-col gap-2">
        {whales.map((whale) => (
          <li key={whale.id}>
            <input
              type="text"
              value={whale.name}
              className="border-0"
              onInput={(event) => {
                setWhaleName(whale.id, event.currentTarget.value)
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RenameWhales
