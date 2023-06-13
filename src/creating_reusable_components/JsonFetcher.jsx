import { useEffect, useState } from "react"

const JsonFetcher = ({ url, children }) => {
  const [data, setData] = useState([])

  // TODO: fetch data from API
  return children(data)
}

export default JsonFetcher
