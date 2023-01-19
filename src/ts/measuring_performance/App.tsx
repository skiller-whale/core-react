import { useState } from "react"
import { generateCustomers, addCustomer } from "../lib/Customers"
import CustomerTable from "./CustomerTable"
import Button from "./Button"

const App = () => {
  const initialCustomers = 200

  const [customers, setCustomers] = useState(
    generateCustomers(initialCustomers)
  )
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")

  const addNewCustomer = (
    newFirstName: string,
    newLastName: string,
    newEmail: string,
    newAmountSpent: string
  ) => {
    setCustomers(
      addCustomer(
        customers,
        newFirstName,
        newLastName,
        newEmail,
        newAmountSpent
      )
    )
  }

  const createCustomer = () => {
    if (newFirstName && newLastName) {
      addNewCustomer(newFirstName, newLastName, newEmail, newAmountSpent)
      setNewFirstName("")
      setNewLastName("")
      setNewEmail("")
      setNewAmountSpent("")
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Customer Database</h1>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Add a Customer</h2>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="first name"
            onChange={(event) => setNewFirstName(event.currentTarget.value)}
            value={newFirstName}
          />
          <input
            type="text"
            placeholder="last name"
            onChange={(event) => setNewLastName(event.currentTarget.value)}
            value={newLastName}
          />
          <input
            type="text"
            placeholder="email"
            onChange={(event) => setNewEmail(event.currentTarget.value)}
            value={newEmail}
          />
          <input
            type="number"
            placeholder="amount spent"
            onChange={(event) => setNewAmountSpent(event.currentTarget.value)}
            value={newAmountSpent}
          />
          <div className="flex justify-end">
            <Button onClick={createCustomer}>
              Create customer {newFirstName} {newLastName}
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Existing Customers</h2>
        <CustomerTable customers={customers} />
      </div>
    </div>
  )
}

export default App
