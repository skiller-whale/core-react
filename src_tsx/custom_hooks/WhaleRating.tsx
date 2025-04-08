import { useState } from "react";

type Props = {
  rating: number;
  onClick: (rating: number) => void;
  max?: number;
};

const WhaleRating = ({ rating, onClick, max = 10 }: Props) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const currentRating = hoverRating ?? rating;

  return (
    <div
      onMouseLeave={() => setHoverRating(null)}
      className="self-end border-2 border-blue-500 p-2 text-3xl cursor-pointer"
    >
      <span
        className="p-2"
        key={0}
        onClick={() => onClick(0)}
        onMouseOver={() => setHoverRating(0)}
      >
        <span className={currentRating > 0 ? "grayscale" : ""}>🚫</span>
      </span>
      {Array.from(Array(max), (_, i) => {
        return (
          <span
            className="p-2"
            key={i + 1}
            onClick={() => onClick(i + 1)}
            onMouseOver={() => setHoverRating(i + 1)}
          >
            {i < currentRating ? (
              "🐳"
            ) : (
              <span className="grayscale">🐋</span>
            )}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default WhaleRating;
