import { renderToStaticMarkup } from "react-dom/server";
import { modules } from "../types.ts";

const Index = () => (
  <>
    <header className="bg-blue-200 p-6">
      <div className="mx-auto max-w-6xl flex items-center px-3 gap-6">
        <img
          src="/server/static/ada.png"
          alt="Skiller Whale logo"
          className="w-12"
        />
        <div className="flex-1 flex items-baseline justify-between text-blue-900">
          <h1 className="text-3xl">Skiller Whale: Core React Exercises</h1>
        </div>
      </div>
    </header>
    <main className="mx-auto max-w-6xl px-3 py-6 flex flex-col gap-6">
      <table className="min-w-full">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="text-left text-xl p-2">JavaScript</th>
            <th className="text-left text-xl">TypeScript</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(modules).map(([key, title]) => (
            <tr key={key} className="border-b even:bg-gray-100">
              {["js", "ts"].map((language) => (
                <td key={language}>
                  <a
                    className="block py-1 odd:pl-1"
                    href={`/${language}/${key}`}
                  >
                    🔗 {title}
                  </a>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  </>
);

export default Index;

export const render = () => renderToStaticMarkup(<Index />);
