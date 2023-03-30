import { type FC, useEffect, useState } from "react"
import { type Whale } from "./types"
import JsonFetcher from "./JsonFetcher"

type Props = {
  term: string
}

const WhaleTable: FC<Props> = ({ term }) => {
  const [whales, setWhales] = useState<Whale[]>([])

  const fetchWhales = async () => {
    const response = await fetch(`/api/aquatic-animals/whales/?term=${term}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    const { animals } = await response.json()
    setWhales(animals)
  }

  useEffect(() => {
    setWhales([])
    fetchWhales()
  }, [term])

  const rows = whales.map((whale, index) => {
    const profilePicture = whale.species.includes("Dolphin") ? "🐬" : "🐳"

    return (
      <tr
        className={`border-b ${index % 2 === 0 ? "" : "bg-gray-100"}`}
        key={whale.id}
      >
        <td className="py-2 px-3 text-4xl text-center">{profilePicture}</td>
        <td className="py-2 px-3 flex justify-between items-baseline">{`${whale.name} the ${whale.species}`}</td>
        <td className="py-2 px-3 text-right">{whale.weight}</td>
        <td className="py-2 px-3 text-xl text-center">
          {whale.hasBaleen ? "❌" : "✅"}
        </td>
      </tr>
    )
  })

  return (
    <div className="basis-6/12">
      <h2 className="text-2xl font-semibold mb-2">List of whales</h2>
      <table className="min-w-full">
        <thead className="border-b bg-gray-300 sticky top-0">
          <tr>
            <th className="w-36 grow-0 font-semibold py-2 px-3 text-center">
              Profile picture
            </th>
            <th className="font-semibold py-2 px-3 text-left">Name</th>
            <th className="font-semibold py-2 px-3 text-right">Weight</th>
            <th className="font-semibold py-2 px-3 text-xl text-center">🦷</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default WhaleTable
