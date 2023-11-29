import type { FC } from "react"
import type { Whale } from "../lib/apiTypes"

type WhaleCardProps = Omit<Whale, "id"> & {
  setX: (x: number) => void
  setY: (x: number) => void
}

const WhaleCard: FC<WhaleCardProps> = ({
  name,
  species,
  location,
  setX,
  setY,
}) => {
  return (
    <div className="border-2 h-48 w-full my-4 p-4 flex flex-col justify-between">
      <h2 className="text-2xl font-semibold">
        {name} the {species}
      </h2>
      <div>Update location:</div>
      <div className="flex justify-between">
        <label>
          X:
          <input
            className="w-48 ml-2"
            id="x"
            type="number"
            value={location?.x}
            onChange={(e) => setX(Number(e.target.value))}
          />
        </label>
        <label>
          Y:
          <input
            className="w-48 ml-2"
            id="y"
            type="number"
            value={location?.y}
            onChange={(e) => setY(Number(e.target.value))}
          />{" "}
        </label>
      </div>
    </div>
  )
}

export default WhaleCard
