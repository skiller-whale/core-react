import { useState } from "react"
import Button from "./Button"

const NewCustomerForm = ({ addNewCustomer }) => {
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")
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
  )
}

export default NewCustomerForm
