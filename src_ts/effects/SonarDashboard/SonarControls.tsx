import useKeyBinding from "../hooks/useKeyBinding";

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
}: Props) => {
  const buttonClasses =
    "rounded w-12 h-12 bg-blue-600 hover:bg-blue-800 font-semibold text-white text-3xl";

  return (
    <div className="shadow p-4 flex-1 flex flex-col gap-3">
      <div className="flex justify-around">
        <div className="flex flex-col gap-3">
          <button className={buttonClasses} onClick={zoomIn}>
            +
          </button>
          <button className={buttonClasses} onClick={zoomOut}>
            -
          </button>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className={buttonClasses} onClick={moveLeft}>
            ⇐
          </button>
          <div className="flex flex-col gap-3">
            <button className={buttonClasses} onClick={moveUp}>
              ⇑
            </button>
            <button className={buttonClasses} onClick={moveDown}>
              ⇓
            </button>
          </div>
          <button className={buttonClasses} onClick={moveRight}>
            ⇒
          </button>
        </div>
      </div>
    </div>
  );
};

export default SonarControls;
