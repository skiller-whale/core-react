import { type Customer } from "../lib/Customers"

type Props = {
  customer: Customer
  index: number
}

const CustomerRow = ({ customer, index }: Props) => (
  <tr className={`border-b ${index % 2 === 0 ? "" : "bg-gray-100"}`}>
    <td className="py-2 px-3">
      {customer.name.first} {customer.name.last}
    </td>
    <td className="py-2 px-3">{customer.email}</td>
    <td className="py-2 px-3">${customer.amountSpent}</td>
  </tr>
)

export default CustomerRow
