import { Suspense, lazy, useState } from "react"
import { whales } from "../data/whales"
import WhaleCard from "./WhaleCard"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Html from "./Html"
import LoadingSpinner from "./LoadingSpinner"
//
// const lazyLoadingDelay = 0
//
// const WhaleCard = lazy(() =>
//   import("./WhaleCard").then(async (module) => {
//     if (typeof window === "undefined") {
//       await new Promise((resolve) => setTimeout(resolve, lazyLoadingDelay))
//     }
//
//     return module
//   })
// )
//
const oops = false
const App = ({ numberOfWhales }) => {
  if (oops) {
    throw new Error("Oops!")
  }
  const [favoriteWhale, setFavoriteWhale] = useState(null)

  return (
    <>
      <div className="flex flex-col gap-6">
        <Header
          href="./rendering_on_the_server/facts"
          callToAction="Click for Extra-Orca-nary Facts"
        >
          Whale Weigh Platform
        </Header>
        <div className="flex gap-6">
          <Sidebar
            favoriteWhale={whales.find((whale) => whale.id === favoriteWhale)}
            unsetFavoriteWhale={() => setFavoriteWhale(null)}
          />
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 items-start">
              {whales.slice(0, numberOfWhales).map((whale, index) => {
                const isFavorite = whale.id === favoriteWhale

                return (
                  <WhaleCard
                    key={whale.id}
                    openTooltipInitially={false}
                    isFavorite={isFavorite}
                    setFavorite={() =>
                      setFavoriteWhale(isFavorite ? null : whale.id)
                    }
                    {...whale}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
