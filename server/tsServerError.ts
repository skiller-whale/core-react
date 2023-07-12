export const logErrorToConsole = (error: Error | string) => {
  const red = "\x1b[31m"
  const reset = "\x1b[0m"
  console.error(red, error, reset)
}
