import { faker } from "@faker-js/faker"

export const generateWhale = () => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  species: faker.animal.cetacean(),
  isWhale: true,
})

export const generateFish = () => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  species: faker.animal.fish(),
  isWhale: false,
})

const sortAquaticAnimals = (aquaticAnimals) =>
  [...aquaticAnimals].sort((p1, p2) => {
    if (p1.species === p2.species) {
      return p1.species.localeCompare(p2.species)
    }

    return p1.name.localeCompare(p2.name)
  })

export const generateAquaticAnimals = (amount) => {
  const aquaticAnimals = Array.from({ length: amount }).map(() =>
    Math.random() < 0.5 ? generateWhale() : generateFish()
  )

  return sortAquaticAnimals(aquaticAnimals)
}

export const addAquaticAnimal = (aquaticAnimals, name, species, isWhale) => {
  return sortAquaticAnimals([
    ...aquaticAnimals,
    {
      id: faker.string.uuid(),
      name,
      species,
      isWhale,
    },
  ])
}

export const deleteAquaticAnimal = (aquaticAnimal, id) => {
  const index = aquaticAnimal.findIndex((animal) => animal.id === id)

  return index > -1
    ? [...aquaticAnimal.slice(0, index), ...aquaticAnimal.slice(index + 1)]
    : aquaticAnimal
}
