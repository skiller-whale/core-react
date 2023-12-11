import { useContext } from "react"
import type { Whale } from "../lib/apiTypes"
import Filter from "./Filters/Filter"
import { ColorContext } from "./state/ColorContext"

type Props = {
  whale: Whale
}

const DepthSonar = ({ whale }: Props) => {
  const { depth } = whale.location
  const Icon = whale.species.includes("Dolphin") ? "🐬" : "🐋"
  const animal = (
    <div className={`absolute left-[55%] top-[${depth}%] text-3xl`}>{Icon}</div>
  )

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold pb-2">Depth sonar</h2>
      <Filter color="green">
        <div className="relative w-24 h-[90vh] overflow-hidden">
          <div className="flex flex-col h-full justify-between">{markers}</div>
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          <span className="absolute inline-flex h-[200%] w-full top-[-200%] animate-[ping_3s_ease-out_infinite] rounded-full bg-black opacity-95"></span>
          {animal}
        </div>
      </Filter>
    </div>
  )
}

const markers = [...Array(11).keys()].map((depth) => {
  const depthInMeters = depth * 100

  return <div key={depthInMeters}>{depthInMeters}m</div>
})

export default DepthSonar
