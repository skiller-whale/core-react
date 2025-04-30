import type { Whale } from "lib/apiTypes";

type WhaleIconProps = {
  whale: Whale;
  centerX: number;
  centerY: number;
  radius: number;
};

const WhaleIcon = ({ whale, centerX, centerY, radius }: WhaleIconProps) => {
  const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2;
  const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2;

  return (
    <div
      key={whale.id}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span style={{ fontSize: `${100 / radius}rem` }}>
        {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
      </span>
    </div>
  );
};

export default WhaleIcon;
