import { useEffect, useState } from "react"

export default () => {
  const [voice, setVoice] = useState()

  const [voices, setVoices] = useState([])

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices()
      setVoices(voices)
      setVoice(voices[0])
    }
    speechSynthesis.addEventListener("voiceschanged", loadVoices)

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices)
    }
  }, [])

  return [voices, voice, setVoice]
}
