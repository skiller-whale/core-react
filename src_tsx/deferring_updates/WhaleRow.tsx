import { FC } from "react"
import { Whale } from "../lib/apiTypes"
import doSomethingThatTakesAges from "../lib/doSomethingThatTakesAges"

type Props = {
  whale: Whale
}

const WhaleRow: FC<Props> = ({ whale }) => {
  doSomethingThatTakesAges(100)

  const profilePicture = whale.species.includes("Dolphin") ? "🐬" : "🐳"

  return (
    <tr className="border-b even:bg-gray-100">
      <td className="py-2 px-3 text-4xl text-center">{profilePicture}</td>
      <td className="py-2 px-3 flex justify-between items-baseline">{`${whale.name} the ${whale.species}`}</td>
      <td className="py-2 px-3 text-right">{whale.weight}</td>
      <td className="py-2 px-3 text-xl text-center">
        {whale.hasBaleen ? "❌" : "✅"}
      </td>
    </tr>
  )
}

export default WhaleRow
