import { useState } from "react"
import Card from "./Card"

const App = ({ planets }) => {
  const [additionalPlanetInfoDisplayed, setAdditionalPlanetInfoDisplayed] =
    useState(null)

  const hideAdditionalPlanetInfo = () => {
    setAdditionalPlanetInfoDisplayed(null)
  }

  return (
    <div
      className="flex flex-col gap-32 p-3"
      onClick={hideAdditionalPlanetInfo}
    >
      <h1 className="text-4xl font-semibold text-center">Planets</h1>
      <div className="flex gap-3">
        {planets.map(({ id, name, img, distanceFromSun, additionalInfo }) => (
          <Card
            key={name}
            title={name}
            label="Distance from Sun"
            text={distanceFromSun}
            info={additionalInfo}
            img={img}
            infoDisplayed={additionalPlanetInfoDisplayed === id}
            onDisplayInfo={(e) => {
              // prevent this event from propagating so that we can immediately
              // display planet info even if other planet info already displayed
              e.stopPropagation()
              if (additionalPlanetInfoDisplayed === id) {
                setAdditionalPlanetInfoDisplayed(null)
              } else {
                setAdditionalPlanetInfoDisplayed(id)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
