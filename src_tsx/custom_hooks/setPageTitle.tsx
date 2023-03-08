import { useEffect, useRef } from "react"

export const setPageTitle = (title: string) => {
  const originalTitleRef = useRef(document.title)

  useEffect(() => {
    const originalTitle = originalTitleRef.current
    document.title = title
    return () => {
      document.title = originalTitle
    }
  }, [])
}
