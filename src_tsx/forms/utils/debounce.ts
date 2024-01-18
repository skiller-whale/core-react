export default (fn: Function, delay = 500) => {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
