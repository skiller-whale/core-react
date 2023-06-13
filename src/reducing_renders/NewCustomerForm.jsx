import { useState } from "react"
import Button from "./Button"

const NewCustomerForm = ({ addCustomer, deleteCustomer }) => {
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")
  const [previousNewEmails, setPreviousNewEmails] = useState([])
  const createCustomer = () => {
    if (newFirstName && newLastName) {
      addCustomer(newFirstName, newLastName, newEmail, newAmountSpent)
      setPreviousNewEmails((previousNewEmails) => [
        ...previousNewEmails,
        newEmail,
      ])
      setNewFirstName("")
      setNewLastName("")
      setNewEmail("")
      setNewAmountSpent("")
    }
  }

  const undo = () => {
    deleteCustomer(previousNewEmails[previousNewEmails.length - 1])
    setPreviousNewEmails((previousNewEmails) => previousNewEmails.slice(0, -1))
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
      {previousNewEmails.length > 0 ? (
        <div className="flex gap-3 justify-end">
          <Button onClick={undo}>Undo</Button>
          <Button onClick={createCustomer}>Create Customer</Button>
        </div>
      ) : (
        <div className="flex justify-end">
          <Button onClick={createCustomer}>Create Customer</Button>
        </div>
      )}
    </form>
  )
}

export default NewCustomerForm
