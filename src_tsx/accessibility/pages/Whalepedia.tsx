import { faker } from "@faker-js/faker"
import Link from "../components/Link"

type Props = {
  cetaceans: string[]
  cetacean: string | null
}

const Whalepedia = ({ cetaceans, cetacean }: Props) => {
  return (
    <main className="flex bg-slate-100 shadow">
      <nav className="flex flex-col gap-3 p-6">
        <h1 className="font-semibold text-lg">Whalepedia</h1>
        {cetaceans.map((cetacean) => (
          <Link
            key={cetacean}
            page="Whalepedia"
            cetacean={cetacean}
            className="block text-left text-blue-600 hover:text-blue-900 focus:text-blue-900"
          />
        ))}
      </nav>
      <div className="flex-1 flex flex-col gap-3 p-6 bg-white">
        {cetacean ? (
          <>
            <h2 className="font-semibold text-lg">{cetacean}</h2>
            <p>
              The {cetacean} is a {faker.lorem.words(5)}.{" "}
              {faker.lorem.paragraph(6)}
            </p>
          </>
        ) : (
          <p>Select a cetacean to learn more about it.</p>
        )}
      </div>
    </main>
  )
}

export default Whalepedia
