import { useState } from "react"
import {
  addCustomer,
  deleteCustomer,
  generateCustomers,
} from "../lib/Customers"
import NewCustomerForm from "./NewCustomerForm"
import CustomerTable from "./CustomerTable"

const App = () => {
  const initialCustomers = 200
  const [customers, setCustomers] = useState(
    generateCustomers(initialCustomers)
  )

  const addNewCustomer = (
    newFirstName,
    newLastName,
    newEmail,
    newAmountSpent
  ) => {
    setCustomers((customers) =>
      addCustomer(
        customers,
        newFirstName,
        newLastName,
        newEmail,
        newAmountSpent
      )
    )
  }

  const deleteLastCustomer = (email) => {
    setCustomers((customers) => deleteCustomer(customers, email))
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Customer Database</h1>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Add a Customer</h2>
        <NewCustomerForm
          addCustomer={addNewCustomer}
          deleteCustomer={deleteLastCustomer}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Existing Customers</h2>
        <CustomerTable customers={customers} />
      </div>
    </div>
  )
}

export default App
