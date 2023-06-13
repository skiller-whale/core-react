import type { Customer } from "../lib/Customers"

type Props = {
  customer: Customer
}

const CustomerRow = ({ customer }: Props) => (
  <tr className={"border-b odd:bg-gray-100"}>
    <td className="py-2 px-3">
      {customer.name.first} {customer.name.last}
    </td>
    <td className="py-2 px-3">{customer.email}</td>
    <td className="py-2 px-3">${customer.amountSpent}</td>
  </tr>
)

export default CustomerRow
