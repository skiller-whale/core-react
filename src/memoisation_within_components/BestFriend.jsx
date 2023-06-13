import { useEffect, useMemo } from "react"

export const BestFriend = ({ animal, voices, voice, setVoice }) => {
  const utterance = new SpeechSynthesisUtterance(
    `Hello ${animal.name} the ${animal.species}`
  )
  utterance.voice = voice

  // uncomment this code when instructed
  // -----------------------------------
  // useEffect(() => {
  //   speechSynthesis.speak(utterance)
  // }, [utterance])
  return (
    <div className="flex flex-col p-6 border-2 mb-6">
      <div className="flex justify-between items-baseline">
        <div>
          My best friend is {animal.name} the {animal.species}.
        </div>

        <button
          className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-800"
          disabled={voices.length === 0}
          onClick={() => speechSynthesis.speak(utterance)}
        >
          Say Hello
        </button>
      </div>

      <div className="flex justify-between items-baseline">
        <div className="flex gap-3 items-center">
          <label htmlFor="voice">Select voice:</label>
          <select
            id="voice"
            disabled={voices.length === 0}
            onChange={(event) => {
              setVoice(
                voices.find((voice) => voice.name === event.currentTarget.value)
              )
            }}
          >
            {voices.length > 0 ? (
              voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}
