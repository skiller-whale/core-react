import type { Customer } from "../lib/Customers"
import CustomerRow from "./CustomerRow"

type Props = {
  customers: Customer[]
}

const CustomerTable = ({ customers }: Props) => {
  const rows = customers.map((customer, index) => (
    <CustomerRow key={index} customer={customer} />
  ))

  return (
    <table className="min-w-full">
      <thead className="border-b bg-gray-300">
        <tr>
          <th className="font-semibold py-2 px-3 text-left">Name</th>
          <th className="font-semibold py-2 px-3 text-left">Email</th>
          <th className="font-semibold py-2 px-3 text-left">Amount spent</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default CustomerTable
