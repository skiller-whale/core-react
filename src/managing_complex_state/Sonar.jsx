import { useContext, useState } from "react"
import Filter from "./Filters/Filter"
import { ColorContext, SetColorContext } from "./state/ColorContext"
import { useSetWhalesContext } from "./state/WhalesState"

const Sonar = ({
  whales,
  favWhale,
  centerX,
  centerY,
  radius,
  zoomIn,
  zoomOut,
  moveLeft,
  moveUp,
  moveRight,
  moveDown,
  setFavWhale,
}) => {
  const [color, setColor] = useState("green")
  const animals = whales.map((whale) => {
    const Icon = (
      <span
        className={`text-[${100 / radius}rem] cursor-pointer ${
          favWhale === whale ? "animate-pulse" : ""
        }`}
        onClick={() => setFavWhale(whale)}
      >
        {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
      </span>
    )

    const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2
    const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2

    return (
      <div key={whale.id} className={`absolute left-[${x}%] top-[${y}%]`}>
        <span>{Icon}</span>
      </div>
    )
  })

  return (
    <div className="flex flex-col mx-16">
      <h1 className="mb-2 text-center font-semibold text-2xl">
        Sonar readings for nearby whales
      </h1>
      <div className="mb-2 flex flex flex-col">
        <div className="mb-2 text-center font-semibold">
          Select sonar colour:
        </div>
        <div className="flex justify-between">
          <label className="mr-2">
            <input
              type="radio"
              checked={color === "green"}
              onChange={() => setColor("green")}
            />
            <span className="m-2 align-middle">Green</span>
          </label>
          <label className="mr-2">
            <input
              type="radio"
              checked={color === "blue"}
              onChange={() => setColor("blue")}
            />
            <span className="m-2 align-middle">Blue/Pink</span>
          </label>
          <label className="mr-2">
            <input
              type="radio"
              checked={color === "red"}
              onChange={() => setColor("red")}
            />
            <span className="m-2 align-middle">Red/Yellow</span>
          </label>
        </div>
      </div>
      <Filter color={color}>
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-2">
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {animals}
        </div>
        <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
      </Filter>
      <div>
        <div className="mt-4">
          Current location: ({centerX}, {centerY})
        </div>
        <div> Search radius: {radius}</div>
      </div>
      <div>
        <h3 className="mb-2 text-center font-semibold">Sonar controls</h3>
      </div>
      <div className="flex justify-around font-semibold text-white text-3xl mt-3">
        <button
          onClick={zoomIn}
          className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-800"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-8"
        >
          -
        </button>
        <button
          onClick={moveLeft}
          className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-8"
        >
          ⇐
        </button>
        <button
          onClick={moveUp}
          className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-8"
        >
          ⇑
        </button>
        <button
          onClick={moveRight}
          className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-8"
        >
          ⇒
        </button>
        <button
          onClick={moveDown}
          className="rounded w-12 h-12 text-white bg-blue-600 hover:bg-blue-8"
        >
          ⇓
        </button>
      </div>
    </div>
  )
}

export default Sonar
