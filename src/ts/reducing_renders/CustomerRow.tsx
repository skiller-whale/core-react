import { memo } from "react"

type Props = {
  name: {
    first: string
    last: string
  }
  email: string
  amountSpent: string
  index: number
}

const CustomerRow = ({ name, email, amountSpent, index }: Props) => (
  <tr className={`border-b ${index % 2 === 0 ? "" : "bg-gray-100"}`}>
    <td className="py-2 px-3">
      {name.first} {name.last}
    </td>
    <td className="py-2 px-3">{email}</td>
    <td className="py-2 px-3">${amountSpent}</td>
  </tr>
)

export default CustomerRow
