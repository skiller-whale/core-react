import { useState } from "react"

const usePages = <Page extends string>(pages: ReadonlyArray<Page>) => {
  const [pageIndex, setPageIndex] = useState(0)

  const page = pages[pageIndex]
  const setPage = (page: Page) => {
    const index = pages.indexOf(page)
    if (index !== -1) {
      setPageIndex(index)
    }
  }

  const nextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex((pageIndex) => pageIndex + 1)
    }
  }

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex((pageIndex) => pageIndex - 1)
    }
  }

  return [page, setPage, nextPage, previousPage] as const
}

export default usePages
