import type { Whale } from "lib/apiTypes";

type Props = {
  whale: Whale;
  centerX: number;
  centerY: number;
  radius: number;
};

const WhalesSonarIcon = ({ whale, centerX, centerY, radius }: Props) => {
  const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2;
  const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2;

  return (
    <div
      key={whale.id}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span>
        <span style={{ fontSize: `${100 / radius}rem` }}>
          {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
        </span>
      </span>
    </div>
  );
};

export default WhalesSonarIcon;
