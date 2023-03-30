const { faker } = require("@faker-js/faker")

const whales = []
const fish = []

const getEndpoints = (app) => {
  app.get("/api/aquatic-animals/whales/", (req, res) => {
    // populate the "database" the first time we get a query
    if (!whales.length) {
      for (let i = 0; i < 1000; i++) {
        const species = faker.animal.cetacean()
        whales.push({
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          species,
          weight: faker.datatype.number(100000),
          hasBaleen: !(
            species.includes("Dolphin") ||
            species.includes("Orca") ||
            species.includes("Beaked")
          ),
        })
      }
    }

    // get whales for response
    const animals =
      req.query.term === null
        ? whales
        : whales.filter(
            (whale) =>
              whale.name.toLowerCase().includes(req.query.term.toLowerCase()) ||
              whale.species.toLowerCase().includes(req.query.term.toLowerCase())
          )

    // send the response after a random delay
    const delay = Math.random() * (1000 - 300) + 300
    setTimeout(() => {
      res.json({
        animals: animals.slice(0, 15),
      })
    }, delay)
  })

  app.get("/api/aquatic-animals/fish/", (req, res) => {
    // populate the "database" the first time we get a query
    if (!fish.length) {
      for (let i = 0; i < 1000; i++) {
        fish.push({
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          species: faker.animal.fish(),
          isSaltwater: faker.datatype.boolean(),
        })
      }
    }

    // get fish for response
    const animals =
      req.query.term === null
        ? fish
        : fish.filter(
            (fish) =>
              fish.name.toLowerCase().includes(req.query.term.toLowerCase()) ||
              fish.species.toLowerCase().includes(req.query.term.toLowerCase())
          )

    // send the response after a random delay
    const delay = Math.random() * (1000 - 300) + 300
    setTimeout(() => {
      res.json({
        animals: animals.slice(0, 15),
      })
    }, delay)
  })
}

module.exports = { getEndpoints }
