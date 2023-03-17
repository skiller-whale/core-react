import { forwardRef } from "react"
import WhaleRating from "./WhaleRating"

const Whale = forwardRef(({ name, weight, about, firstTimeSeen }, ref) => {
  const onKeyboardRating = (event) => {
    switch (event.key) {
      case "ArrowRight":
        break
      case "ArrowLeft":
        break
    }
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyUp={onKeyboardRating}
      className={
        "flex flex-col gap-3 border border-gray-300 p-3" +
        (firstTimeSeen ? " bg-teal-300" : " transition-colors duration-500")
      }
    >
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">
          {name}, weight {weight}kg{" "}
        </h3>
      </div>
      <p>{about}</p>
      <WhaleRating rating={5} max={10} onClick={console.log} />
    </div>
  )
})

export default Whale
