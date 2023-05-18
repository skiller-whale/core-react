import { useEffect, useState } from "react"

export default () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice>()

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices()
      setVoices(voices)
      setVoice(voices[0])
    }
    loadVoices()
    if (voices.length > 0) return
    speechSynthesis.addEventListener("voiceschanged", loadVoices)

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices)
    }
  }, [])

  return [voices, voice, setVoice] as const
}
