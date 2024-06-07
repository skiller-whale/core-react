import { useContext, useState } from "react";
import Filter from "./Filters/Filter";
import { ColorContext, SetColorContext } from "./state/ColorContext";
import { useSetWhalesContext } from "./state/WhalesState";

const SonarDisplay = ({
  whales,
  selectedWhale,
  centerX,
  centerY,
  radius,
  setSelectedWhaleId,
}) => {
  const [color, setColor] = useState("green");
  const animals = whales.map((whale) => {
    const Icon = (
      <span
        className={`cursor-pointer ${selectedWhale === whale ? "animate-pulse" : ""}`}
        style={{ fontSize: `${100 / radius}rem` }}
        onClick={() => setSelectedWhaleId(whale.id)}
      >
        {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
      </span>
    );

    const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2;
    const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2;

    return (
      <div
        key={whale.id}
        className="absolute"
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <span>{Icon}</span>
      </div>
    );
  });

  return (
    <div className="shadow px-16 py-4 flex flex-col gap-3 items-center">
      <h1 className="font-semibold text-2xl">
        Sonar readings for nearby whales
      </h1>
      <div className="flex flex-col">
        <div className="text-center font-semibold">Select sonar colour:</div>
        <div className="flex gap-6">
          <label className="cursor-pointer">
            <input
              type="radio"
              checked={color === "green"}
              onChange={() => setColor("green")}
            />
            <span className="m-2 align-middle">Green</span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              checked={color === "blue"}
              onChange={() => setColor("blue")}
            />
            <span className="m-2 align-middle">Blue/Pink</span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              checked={color === "red"}
              onChange={() => setColor("red")}
            />
            <span className="m-2 align-middle">Red/Yellow</span>
          </label>
        </div>
      </div>
      <Filter color={color}>
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-2">
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {animals}
        </div>
        <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
      </Filter>
    </div>
  );
};

export default SonarDisplay;
