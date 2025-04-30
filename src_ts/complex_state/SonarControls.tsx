import type { Dispatch } from "react";
import type { SonarAction } from "./state/SonarState";

type Props = {
  zoomIn: () => void;
  zoomOut: () => void;
  moveLeft: () => void;
  moveUp: () => void;
  moveRight: () => void;
  moveDown: () => void;
};

const SonarControls = ({
  zoomIn,
  zoomOut,
  moveLeft,
  moveUp,
  moveRight,
  moveDown,
}: Props) => (
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

type ButtonProps = {
  onClick: () => void;
  children: string;
};

const Button = ({ onClick, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-800 font-semibold text-white text-3xl"
  >
    {children}
  </button>
);

export default SonarControls;
