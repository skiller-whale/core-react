import { renderToStaticMarkup } from "react-dom/server"
import type { FC } from "react"
import type modules from "./modules.ts"

type Props = {
  modules: typeof modules
}

const App: FC<Props> = ({ modules }) => (
  <>
    <div className="mb-6 p-3 bg-green-100 text-green-700 border border-green-600">
      Hello Whale! It looks like you're all set up.
    </div>
    <h2 className="text-2xl font-semibold my-2">Module links: </h2>
    <table className="min-w-full">
      <thead>
        <tr className="border-b bg-gray-100">
          <th className="text-left text-xl p-2">JavaScript</th>
          <th className="text-left text-xl">TypeScript</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(modules).map(([id, title]) => (
          <tr key={id} className="border-b even:bg-gray-100">
            {["/", "/ts/"].map((ext) => (
              <td key={ext}>
                <a className="block py-1 odd:pl-1" href={`${ext}${id}`}>
                  🔗 {title}
                </a>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

export const renderHome = ({ modules }: Props) =>
  renderToStaticMarkup(<App modules={modules} />)
