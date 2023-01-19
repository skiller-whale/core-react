import { faker } from "@faker-js/faker"

export type Customer = {
  name: {
    first: string
    last: string
  }
  email: string
  amountSpent: string
}

export const generateCustomers = (amount: number): Customer[] => {
  const customers = []
  for (let i = 0; i < amount; i += 1) {
    customers.push(generateCustomer())
  }
  return sortCustomers(customers)
}

export const addCustomer = (
  customers: Customer[],
  first: string,
  last: string,
  email: string,
  amountSpent: string
): Customer[] => {
  const newCustomers = customers.concat({
    name: { first, last },
    email,
    amountSpent,
  })
  return sortCustomers(newCustomers)
}

export const deleteCustomer = (
  customers: Customer[],
  email: string
): Customer[] => {
  const index = customers.findIndex((customer) => customer.email === email)
  return index > -1
    ? [...customers.slice(0, index), ...customers.slice(index + 1)]
    : customers
}

const generateCustomer = (): Customer => ({
  name: {
    first: faker.name.firstName(),
    last: faker.name.lastName(),
  },
  email: faker.internet.email(),
  amountSpent: faker.finance.amount(),
})

const sortCustomers = (customers: Customer[]): Customer[] =>
  [...customers].sort((p1, p2) => {
    if (p1.name.last === p2.name.last) {
      return p1.name.first.localeCompare(p2.name.first)
    }
    return p1.name.last.localeCompare(p2.name.last)
  })
