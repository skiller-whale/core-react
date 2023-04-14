import { useMemo, useState } from "react"
import { generateAquaticAnimals } from "./whales"
import AquaticAnimalTable from "./AquaticAnimalTable"
import { Search } from "./Search"
import doSomethingThatTakesAges from "./doSomethingThatTakesAges"

const aquaticAnimals = generateAquaticAnimals(100)

const ARTIFICIALLY_SLOW = true

const purposefullySlowFilter = (aquaticAnimals, searchTerm) =>
  aquaticAnimals.filter((animal) => {
    if (ARTIFICIALLY_SLOW) {
      doSomethingThatTakesAges(5)
    }
    if (searchTerm === "") {
      return true
    }
    const name = animal.name.toLowerCase()
    const species = animal.species.toLowerCase()
    const searchTermLower = searchTerm.toLowerCase()
    return name.includes(searchTermLower) || species.includes(searchTermLower)
  })

const App = () => {
  const [aquaticMode, setAquaticMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const filteredAquaticAnimals = purposefullySlowFilter(
    aquaticAnimals,
    searchTerm
  )
  return (
    <div
      className={`flex flex-col gap-3 p-6 m-[-2.5rem] ${
        aquaticMode ? "bg-blue-300" : ""
      }`}
    >
      <h1 className="text-2xl font-semibold">Ada's friends </h1>
      <div className="flex justify-between gap-3">
        <div className="flex gap-3 items-center">
          <label className="cursor-pointer" htmlFor="aquaticMode">
            Aquatic mode
          </label>
          <input
            className="inline-block cursor-pointer"
            type="checkbox"
            id="aquaticMode"
            onChange={(event) => setAquaticMode(event.currentTarget.checked)}
            checked={aquaticMode}
          />
        </div>
        <Search setSearchTerm={setSearchTerm} />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Friends</h2>
        <AquaticAnimalTable animals={filteredAquaticAnimals} />
      </div>
    </div>
  )
}

export default App
