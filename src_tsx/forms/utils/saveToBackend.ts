type Result = { ok: true } | { ok: false; error: string }

export default async (formData: FormData): Promise<Result> => {
  console.log(`submitting to backend...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`submitting to backend... done!`)
      resolve({ ok: true })
    }, Math.random() * 1000)
  })
}
