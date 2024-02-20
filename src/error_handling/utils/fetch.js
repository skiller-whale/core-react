export default (input, init) => {
  if (
    typeof input === "string" &&
    input === "/api/aquatic-animals/whales/poor"
  ) {
    // simulate a network failure
    return new Promise((resolve, reject) => {
      const delay = Math.random() * (1000 - 300) + 300
      setTimeout(() => {
        reject(new TypeError("Failed to fetch remote resource"))
      }, delay)
    })
  }

  return fetch(input, init)
}
