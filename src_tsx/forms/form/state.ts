export const pages = [
  "personalDetails",
  "destinationAndDates",
  "preferredActivities",
  "specialRequirements",
  "confirmation",
  "submitted",
] as const

export type Page = (typeof pages)[number]

export type PageStatus = "invalid" | "valid"

export type FormStatus = "inProgress" | "submitting" | "success" | "error"

export const initialFormData = new FormData()

initialFormData.set("name", "Ada the Skiller Whale")
initialFormData.set("email", "ada@skillerwhale.com")
initialFormData.set("address", "The Sea")
initialFormData.set("numberOfAdults", "1")
initialFormData.set("numberOfChildren", "0")
initialFormData.set("checkIn", "2022-02-05")
initialFormData.set("checkOut", "2022-02-12")
