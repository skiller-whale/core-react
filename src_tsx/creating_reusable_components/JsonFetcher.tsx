import { useState, useEffect } from "react"

type Props<Data> = {
  url: string
  children: (data: Data[]) => JSX.Element
}

const JsonFetcher = <Data,>({ url, children }: Props<Data>) => {
  const [data, setData] = useState<Data[]>([])

  // TODO: fetch data from API

  return children(data)
}

export default JsonFetcher
