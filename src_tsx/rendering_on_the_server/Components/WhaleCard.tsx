import { useEffect, useRef, useState } from "react";
import doSomethingThatTakesAges from "../../lib/doSomethingThatTakesAges";
import type { Whale } from "../data/whales";
import Tooltip from "./Tooltip";

type Props = Omit<Whale, "id"> & {
  isFavorite: boolean;
  setFavorite: () => void;
  openTooltipInitially?: boolean;
};

const WhaleCard = ({
  name,
  species,
  weight,
  isFavorite,
  setFavorite,
  openTooltipInitially = false,
}: Props) => {
  const profilePicture = species.includes("Dolphin") ? "🐬" : "🐋";

  const [hover, setHover] = useState<boolean | null>(null);
  const showFavorite = hover ?? isFavorite;

  const ref = useRef<HTMLButtonElement>(null);
  const [tooltipDisplayed, setTooltipDisplayed] =
    useState<boolean>(openTooltipInitially);

  const onMouseEnterButton = () => {
    setHover(!isFavorite);
    setTooltipDisplayed((value) => !value);
  };

  const resetState = () => {
    setHover(null);
    setTooltipDisplayed(false);
  };

  const onClick = () => {
    resetState();
    setFavorite();
  };

  return (
    <div className="flex flex-col gap-3 border border-gray-300 p-3 w-80 h-80">
      <div className="flex flex-col font-semibold">
        <div className="flex text-xl justify-between items-baseline cursor-pointer">
          {name}
          <button
            ref={ref}
            className="text-3xl"
            onClick={onClick}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={resetState}
          >
            {tooltipDisplayed ? (
              <Tooltip buttonRef={ref}>
                {isFavorite
                  ? `Click the ☆ if ${name} the ${species} is not your favourite whale anymore. It's OK. ${name} will understand.`
                  : `Click the ⭐ to make ${name} the ${species} your favourite whale of all time`}
              </Tooltip>
            ) : null}
            {showFavorite ? "⭐" : "☆"}
          </button>
        </div>
        <div className="text-l">the {species}</div>
      </div>
      <div className="font-semibold">Weight: {weight} kg</div>
      <div className="py-2 px-3 text-9xl text-center mt-auto">
        {profilePicture}
      </div>
    </div>
  );
};

export default WhaleCard;
