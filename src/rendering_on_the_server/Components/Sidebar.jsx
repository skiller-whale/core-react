import WhaleCard from "./WhaleCard"

const Sidebar = ({ favoriteWhale, unsetFavoriteWhale }) => {
  return (
    <div className="w-80">
      <h2 className="text-2xl font-bold text-center p-2 mb-2">
        ⭐🐳 Favorite Whale 🐳⭐
      </h2>
      <div>
        {favoriteWhale ? (
          <WhaleCard
            {...favoriteWhale}
            isFavorite={true}
            setFavorite={unsetFavoriteWhale}
          />
        ) : (
          <div className="text-gray-400">No favorite whale selected</div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
