const doSomethingThatTakesAges = (delay: number = 500) => {
  const start = performance.now()
  while (performance.now() < start + delay) {}
}

export default doSomethingThatTakesAges
