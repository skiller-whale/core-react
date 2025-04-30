import type { Whale } from "lib/apiTypes";

type Props = {
  whale: Whale;
  selected: boolean;
  radius: number;
  centerX: number;
  centerY: number;
  onClick: () => void;
};

const WhaleIcon = ({
  whale,
  selected,
  radius,
  centerX,
  centerY,
  onClick,
}: Props) => {
  const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2;
  const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2;

  return (
    <div
      key={whale.id}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span>
        <span
          className={`cursor-pointer border-2 rounded-full p-1 ${
            selected ? "animate-pulse" : "border-transparent"
          }`}
          style={{ fontSize: `${100 / radius}rem` }}
          onClick={(event) => {
            event.stopPropagation();
            onClick();
          }}
        >
          {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
        </span>
      </span>
    </div>
  );
};

export default WhaleIcon;
