import { type ReactElement, useEffect, useState } from "react";

type Props<Data> = {
  url: string;
  children: (data: Data[]) => ReactElement;
};

const JsonFetcher = <Data,>({ url, children }: Props<Data>) => {
  const [data, setData] = useState<Data[]>([]);

  // TODO: fetch data from API

  return children(data);
};

export default JsonFetcher;
