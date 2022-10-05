import { type FC, useState } from "react"
import { type NewsItemProps, getNextNewsItem } from "./newsItems"
import NewsItem from "./NewsItem"

type Props = {
  newsItems: NewsItemProps[]
}

const App: FC<Props> = ({ newsItems: initialNewsItems }) => {
  const [newsItems] = useState(initialNewsItems)

  const addNewsItem = async () => {
    newsItems.push(await getNextNewsItem())
  }

  return (
    <div className="container">
      <div className="d-flex mb-3">
        <h1 className="flex-grow-1">News</h1>
        <div>
          <button className="btn btn-primary mt-2" onClick={addNewsItem}>
            Fetch More News
          </button>
        </div>
      </div>
      {newsItems.map((newsItem) => (
        <NewsItem id={newsItem.id} {...newsItem} />
      ))}
    </div>
  )
}

export default App
