import { createContext } from "react"

const pages = ["Whale Tracker", "Report a Sighting", "Whalepedia"] as const

export type Page = (typeof pages)[number]

export const PageContext = createContext<
  (page: Page, cetacean?: string) => void
>(() => {})

export default pages
