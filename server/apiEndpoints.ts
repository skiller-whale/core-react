import { faker } from "@faker-js/faker"
import { type Request, Router } from "express"
import type { Fish, Whale } from "../src_tsx/lib/apiTypes.ts"

const aquaticAnimalsApi = Router()

const whales: Whale[] = []
const setupWhalesDatabase = () => {
  if (!whales.length) {
    for (let i = 0; i < 1000; i++) {
      const species = faker.animal.cetacean()
      whales.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        species,
        weight: faker.number.int(100000),
        hasBaleen: !(
          species.includes("Dolphin") ||
          species.includes("Killer") ||
          species.includes("Pilot") ||
          species.includes("Tucuxi") ||
          species.includes("Costero") ||
          species.includes("Sperm") ||
          species.includes("Beaked")
        ),
        location: {
          x: faker.number.float({ min: -100, max: 100, precision: 0.01 }),
          y: faker.number.float({ min: -100, max: 100, precision: 0.01 }),
          depth: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
        },
      })
    }
  }
}

const fish: Fish[] = []
const setupFishDatabase = () => {
  if (!fish.length) {
    for (let i = 0; i < 1000; i++) {
      fish.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        species: faker.animal.fish(),
        isSaltwater: faker.datatype.boolean(),
      })
    }
  }
}

const randomlyDelay = (callback: (...args: any) => any) => {
  const delay = Math.random() * (1000 - 300) + 300
  setTimeout(callback, delay)
}

const filterAnimalsByTerm = <Animal extends Whale | Fish>(
  animals: Animal[],
  req: Request,
) => {
  const term =
    typeof req.query.term === "string" ? req.query.term.toLowerCase() : null

  return term == null
    ? animals
    : animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(term) ||
          animal.species.toLowerCase().includes(term),
      )
}

aquaticAnimalsApi.get("/whales/", (req, res) => {
  setupWhalesDatabase()

  const animals = filterAnimalsByTerm(whales, req)
  randomlyDelay(() => {
    res.json({ animals: animals.slice(0, 15) })
  })
})

aquaticAnimalsApi.get("/fish/", (req, res) => {
  setupFishDatabase()

  const animals = filterAnimalsByTerm(fish, req)
  randomlyDelay(() => {
    res.json({ animals: animals.slice(0, 15) })
  })
})

aquaticAnimalsApi.get("/whales/bad", (req, res) => {
  setupWhalesDatabase()

  const animals = [
    { ...whales[0], location: undefined },
    ...whales.slice(1, 5),
    { ...whales[5], location: undefined },
    ...whales.slice(6, 9),
    { ...whales[9], location: undefined },
    { ...whales[10], location: undefined },
    ...whales.slice(11, 15),
  ]
  randomlyDelay(() => {
    res.json({ animals })
  })
})

aquaticAnimalsApi.get("/whales/invalid", (req, res) => {
  randomlyDelay(() => {
    res.send("[{")
  })
})

const api = Router()
api.use("/aquatic-animals", aquaticAnimalsApi)

export default api
