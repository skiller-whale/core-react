import type { Whale } from "../../lib/apiTypes"

type Props = {
  whale: Whale
}

const WhaleRow = ({ whale }: Props) => {
  // artificially slow down rendering
  const start = performance.now()
  while (performance.now() < start + 20) {}

  return (
    <tr className="border-b even:bg-gray-100">
      <td className="py-2 px-3 text-3xl text-center">
        {whale.species.includes("Dolphin") ? "🐬" : "🐳"}
      </td>
      <td className="py-2 px-3">{whale.name}</td>
      <td className="py-2 px-3">{whale.species}</td>
      <td className="py-2 px-3">
        ({whale.location.x}, {whale.location.y})
      </td>
    </tr>
  )
}

export default WhaleRow
