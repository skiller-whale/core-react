import type { Whale } from "../../lib/apiTypes"
import { useSetWhalesContext } from "./state/WhalesState"

type Props = {
  whale: Whale
}

const WhaleCard = ({ whale }: Props) => {
  const dispatchWhalesAction = useSetWhalesContext()

  return (
    <div className="border-2 h-48 w-full my-4 p-4 flex flex-col justify-between">
      <h2 className="text-2xl font-semibold">
        {whale.name} the {whale.species}
      </h2>
      <div>Update location:</div>
      <div className="flex justify-between">
        <label>
          X:
          <input
            className="w-48 ml-2"
            id="x"
            type="number"
            value={whale.location.x}
            onChange={(e) =>
              dispatchWhalesAction({
                type: "setSelectedWhaleX",
                x: Number(e.target.value),
              })
            }
          />
        </label>
        <label>
          Y:
          <input
            className="w-48 ml-2"
            id="y"
            type="number"
            value={whale.location.y}
            onChange={(e) =>
              dispatchWhalesAction({
                type: "setSelectedWhaleY",
                y: Number(e.target.value),
              })
            }
          />
        </label>
      </div>
    </div>
  )
}

export default WhaleCard
