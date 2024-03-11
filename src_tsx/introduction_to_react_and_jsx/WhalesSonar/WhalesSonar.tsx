import { useState } from "react"
import type { Whale } from "../../lib/apiTypes"
import Button from "../components/Button"
import WhalesSonarIcon from "./WhalesSonarIcon"

type Props = {
  whales: Whale[]
}

const Sonar = ({ whales }: Props) => {
  const [centerX, setCentreX] = useState(0)
  const [centerY, setCentreY] = useState(0)
  const [radius, setRadius] = useState(50)

  const isVisible = (whale: Whale) =>
    (whale.location.x - centerX) ** 2 + (whale.location.y - centerY) ** 2 <=
    radius ** 2

  return (
    <div className="flex flex-col gap-3 w-96 mx-auto my-6">
      <div className="relative">
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-2">
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {whales.filter(isVisible).map((whale) => (
            <WhalesSonarIcon
              key={whale.id}
              whale={whale}
              centerX={centerX}
              centerY={centerY}
              radius={radius}
            />
          ))}
        </div>
        <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col gap-3">
          <Button
            icon="+"
            onClick={() => setRadius(Math.max(20, radius - 10))}
          />
          <Button
            icon="-"
            onClick={() => setRadius(Math.min(100, radius + 10))}
          />
        </div>
        <div className="flex gap-3 items-center">
          <Button
            icon="⇐"
            onClick={() => setCentreX(Math.max(-100, centerX - 10))}
          />
          <div className="flex flex-col gap-3">
            <Button
              icon="⇑"
              onClick={() => setCentreY(Math.max(-100, centerY - 10))}
            />
            <Button
              icon="⇓"
              onClick={() => setCentreY(Math.min(100, centerY + 10))}
            />
          </div>
          <Button
            icon="⇒"
            onClick={() => setCentreX(Math.min(100, centerX + 10))}
          />
        </div>
      </div>
    </div>
  )
}

export default Sonar
