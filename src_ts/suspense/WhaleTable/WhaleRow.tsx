import type { Whale } from "lib/apiTypes";

type Props = {
  query: string;
  whale: Whale;
};

const WhaleRow = ({ query, whale }: Props) => (
  <tr className="border-b even:bg-gray-100">
    <td className="py-2 px-3 text-3xl text-center">
      {whale.species.includes("Dolphin") ? "🐬" : "🐳"}
    </td>
    <td
      className="py-2 px-3"
      dangerouslySetInnerHTML={{ __html: highlightQuery(whale.name, query) }}
    />
    <td
      className="py-2 px-3"
      dangerouslySetInnerHTML={{ __html: highlightQuery(whale.species, query) }}
    />
    <td className="py-2 px-3">
      ({whale.location.x}, {whale.location.y})
    </td>
  </tr>
);

const highlightQuery = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<span class="bg-yellow-200">$1</span>');
};

export default WhaleRow;
