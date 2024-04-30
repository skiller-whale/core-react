import { useContext, type ComponentProps } from "react"
import { PageContext, type Page } from "../pages"

type Props = ComponentProps<"a"> & {
  page: Page
  cetacean?: string
}

const Link = ({ page, cetacean, ...rest }: Props) => {
  const setPage = useContext(PageContext)

  return (
    <a
      onClick={(e) => {
        e.preventDefault()
        setPage(page, cetacean)
      }}
      {...rest}
    >
      {cetacean ?? page}
    </a>
  )
}

export default Link
