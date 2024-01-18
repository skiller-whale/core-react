export default async (formData, submitted) => {
  const action = submitted ? "submitting" : "saving"
  console.log(`${action} to backend...`)

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${action} to backend... done!`)
      resolve({ ok: true })
    }, Math.random() * 1000)
  })
}
