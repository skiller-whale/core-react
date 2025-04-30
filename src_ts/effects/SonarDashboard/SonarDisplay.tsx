import type { Whale } from "lib/apiTypes";
import Filter from "lib/Filters/Filter";
import WhaleIcon from "./WhaleIcon";
import useWindowSize from "../hooks/useWindowSize";

type Props = {
  whales: Whale[];
  centerX: number;
  centerY: number;
  radius: number;
};

const SonarDisplay = ({ whales, centerX, centerY, radius }: Props) => {
  const { width, height } = useWindowSize();
  const sonarSize = Math.min(width - 180, height - 400);

  return (
    <div className="shadow px-16 py-4 flex-1 flex flex-col gap-3 items-center justify-around" tabIndex={0}>
      <h1 className="font-semibold text-2xl">
        Sonar readings for nearby whales
      </h1>
      <Filter color="green">
        <div
          className="relative rounded-full overflow-hidden border-2"
          style={{ width: sonarSize, height: sonarSize }}
        >
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {whales.map((whale) => (
            <WhaleIcon
              key={whale.id}
              whale={whale}
              radius={radius}
              centerX={centerX}
              centerY={centerY}
            />
          ))}
        </div>
        <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
      </Filter>
    </div>
  );
};

export default SonarDisplay;
