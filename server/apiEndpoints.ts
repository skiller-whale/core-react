import { faker } from "@faker-js/faker"
import { type Request, Router } from "express"
import type { Fish, Whale } from "../src_tsx/lib/apiTypes.ts"

const aquaticAnimalsApi = Router()

const whales: Whale[] = []
const fish: Fish[] = []

const filterAnimalsByTerm = <Animal extends Whale | Fish>(
  animals: Animal[],
  req: Request,
) => {
  const term: string = (req.query.term as string).toLowerCase()

  return req.query.term == null
    ? animals
    : animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(term) ||
          animal.species.toLowerCase().includes(term),
      )
}

aquaticAnimalsApi.get("/whales/", (req, res) => {
  // populate the "database" the first time we get a query
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

  // get whales for response
  const animals = filterAnimalsByTerm(whales, req)

  // send the response after a random delay
  const delay = Math.random() * (1000 - 300) + 300
  setTimeout(() => {
    res.json({
      animals: animals.slice(0, 15),
    })
  }, delay)
})

aquaticAnimalsApi.get("/fish/", (req, res) => {
  // populate the "database" the first time we get a query
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

  // get fish for response
  const animals = filterAnimalsByTerm(fish, req)

  // send the response after a random delay
  const delay = Math.random() * (1000 - 300) + 300
  setTimeout(() => {
    res.json({
      animals: animals.slice(0, 15),
    })
  }, delay)
})

const api = Router()
api.use("/aquatic-animals", aquaticAnimalsApi)

export default api
