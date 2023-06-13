import type { FC } from "react"

const Promotion1: FC = () => (
  <div className="flex flex-col h-full w-full text-l">
    <div className="text-xl font-bold">SQL: Ess-queue-ell or sequel?</div>
    <div className="my-auto flex flex-col justify-evenly grow">
      <div className="h-16 w-full bg-neutral-200 rounded">
        <div
          className="h-16 w-2/3 bg-red-600 rounded-s flex justify-around items-center"
          role="progressbar"
        >
          Ess-queue-ell
        </div>
      </div>
      <div className="h-16 w-full bg-neutral-200 rounded">
        <div
          className="h-16 w-3/4 bg-red-600 rounded-s flex justify-around items-center"
          role="progressbar"
        >
          sequel
        </div>
      </div>
    </div>
    <button className="h-16 bg-green-600 hover:bg-green-800 text-xl text-white rounded-full">
      Vote Now!
    </button>
  </div>
)

export default Promotion1
