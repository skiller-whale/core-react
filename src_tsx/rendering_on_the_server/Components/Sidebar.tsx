import type { Dispatch, SetStateAction } from "react";
import type { Whale } from "../data/whales";
import WhaleCard from "./WhaleCard";

type Props = {
  favoriteWhale?: Whale;
  unsetFavoriteWhale: () => void;
};

const Sidebar = ({ favoriteWhale, unsetFavoriteWhale }: Props) => {
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
  );
};

export default Sidebar;
