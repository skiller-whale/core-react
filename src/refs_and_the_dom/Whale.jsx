import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import WhaleInput from "./WhaleInput";

const Whale = ({ name, weight: initialWeight, about }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () =>
    setFullscreen((fullscreen) => {
      // TODO: show/hide dialog
      return !fullscreen;
    });

  const [weight, setWeight] = useState(initialWeight);
  const changeWeight = (event) => {
    setWeight(parseInt(event.currentTarget.value));
  };

  return (
    <div className="flex flex-col gap-3 p-3 bg-white">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex gap-3 items-baseline">
          <label>Weight</label>
          <input type="number" value={weight} onInput={changeWeight} />
          <button
            onClick={toggleFullscreen}
            className="bg-sky-700 text-white p-2 hover:bg-sky-900"
          >
            {fullscreen ? "close" : "pop out"}
          </button>
        </div>
      </div>
      <p>{about}</p>
    </div>
  );
};

export default Whale;
