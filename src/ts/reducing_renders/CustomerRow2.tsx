import { memo } from "react"

type Props = {
  customer: {
    firstName: string
    lastName: string
    email: string
    amountSpent: string
  }
  index: number
}

const CustomerRow = ({ customer, index }: Props) => (
  <tr className={`border-b ${index % 2 === 0 ? "" : "bg-gray-100"}`}>
    <td className="py-2 px-3">
      {customer.firstName} {customer.lastName}
    </td>
    <td className="py-2 px-3">{customer.email}</td>
    <td className="py-2 px-3">${customer.amountSpent}</td>
  </tr>
)

export default memo(CustomerRow)
