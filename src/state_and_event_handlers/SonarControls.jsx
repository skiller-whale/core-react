import { useState } from "react";

const SonarControls = () => {
  const [centerX, setCentreX] = useState(0);
  const [centerY, setCentreY] = useState(0);
  const [radius, setRadius] = useState(50);
  const moveLeft = () => setCentreX(Math.max(-100, centerX - 10));
  const moveRight = () => setCentreX(Math.min(100, centerX + 10));
  const moveUp = () => setCentreY(Math.max(-100, centerY - 10));
  const moveDown = () => setCentreY(Math.min(100, centerY + 10));
  const zoomIn = () => setRadius(Math.max(20, radius - 10));
  const zoomOut = () => setRadius(Math.min(100, radius + 10));

  return (
    <div className="shadow p-4 flex flex-col gap-3">
      <div className="flex justify-around mt-3">
        <div className="flex flex-col gap-3">
          <Button onClick={zoomIn}>+</Button>
          <Button onClick={zoomOut}>-</Button>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button onClick={moveLeft}>⇐</Button>
          <div className="flex flex-col gap-3">
            <Button onClick={moveUp}>⇑</Button>
            <Button onClick={moveDown}>⇓</Button>
          </div>
          <Button onClick={moveRight}>⇒</Button>
        </div>
      </div>
    </div>
  );
};

const Button = ({ onClick, children }) => (
  <button
    className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-800 font-semibold text-white text-3xl"
    onClick={onClick}
  >
    {children}
  </button>
);

export default SonarControls;
