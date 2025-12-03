import { faker } from "@faker-js/faker";
import type { Fish, Whale } from "lib/apiTypes.ts";

export const whales: Whale[] = [];

export const fish: Fish[] = [];

export const setupData = () => {
  setupWhalesData();
  setupFishData();
};

export const setupWhalesData = () => {
  if (!whales.length) {
    for (let i = 0; i < 1000; i++) {
      whales.push(createRandomWhale());
    }
  }
};

export const setupFishData = () => {
  if (!fish.length) {
    for (let i = 0; i < 1000; i++) {
      fish.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        species: faker.animal.fish(),
        isSaltwater: faker.datatype.boolean(),
      });
    }
  }
};

const createRandomWhale = () => {
  const species = faker.animal.cetacean();
  return {
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
      x: faker.number.float({ min: -100, max: 100, multipleOf: 0.01 }),
      y: faker.number.float({ min: -100, max: 100, multipleOf: 0.01 }),
      depth: faker.number.float({ min: 0, max: 100, multipleOf: 0.01 }),
    },
  };
};

const createRandomFish = () => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  species: faker.animal.fish(),
  isSaltwater: faker.datatype.boolean(),
});
