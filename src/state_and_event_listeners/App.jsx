import { useState } from "react"
import { getNextNewsItem } from "./newsItems"
import NewsItem from "./NewsItem"

const App = ({ newsItems: initialNewsItems }) => {
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
