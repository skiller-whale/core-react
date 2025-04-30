import Button from "../components/Button";

type Props = {
  moveLeft: () => void;
  moveUp: () => void;
  moveRight: () => void;
  moveDown: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
};

const SonarControls = ({
  moveLeft,
  moveUp,
  moveRight,
  moveDown,
  zoomIn,
  zoomOut,
}: Props) => (
  <div className="shadow p-4 flex-1 flex flex-col gap-3">
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

export default SonarControls;
