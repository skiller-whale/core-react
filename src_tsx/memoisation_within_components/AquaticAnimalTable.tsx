import { memo, useCallback, useMemo, useState } from "react"
import doSomethingThatTakesAges from "../lib/doSomethingThatTakesAges"
import type { AquaticAnimal } from "./whales"
import AnimalRow from "./AquaticAnimalRow"
import { BestFriend } from "./BestFriend"
import useSpeechSynthesisVoices from "./useSpeechSynthesisVoices"

const ARTIFICIALLY_SLOW = true

type Props = {
  animals: AquaticAnimal[]
}

const AquaticAnimalTable = ({ animals }: Props) => {
  const [bestFriend, setBestFriend] = useState(animals[0])

  const [voices, voice, setVoice] = useSpeechSynthesisVoices()

  const setBestFriendAndSayHello = (animal: AquaticAnimal) => {
    setBestFriend(animal)

    const utterance = new SpeechSynthesisUtterance(
      `Hello ${animal.name} the ${animal.species}`
    )
    utterance.voice = voice
    speechSynthesis.speak(utterance)
  }

  if (ARTIFICIALLY_SLOW) {
    doSomethingThatTakesAges(1000)
  }

  return (
    <div>
      <BestFriend
        animal={bestFriend}
        voices={voices}
        voice={voice}
        setVoice={setVoice}
      />
      <div className="h-[60vh] overflow-auto">
        <table className="min-w-full">
          <thead className="border-b bg-gray-300 sticky top-0">
            <tr>
              <th className="font-semibold py-2 px-3">Profile picture</th>
              <th className="font-semibold py-2 px-3 text-left">Name</th>
              <th className="font-semibold py-2 px-3 text-left">Species</th>
              <th className="font-semibold py-2 px-3">Best Friend?</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal) => (
              <AnimalRow
                key={animal.id}
                animal={animal}
                isBestFriend={animal === bestFriend}
                setBestFriend={setBestFriend}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default memo(AquaticAnimalTable)
