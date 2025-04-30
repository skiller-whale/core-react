import Filter from "lib/Filters/Filter";
import WhaleIcon from "./WhaleIcon";
import setDocumentTitle from "../hooks/useDocumentTitle";

const SonarDisplay = ({
  whales,
  selectedWhale,
  centerX,
  centerY,
  radius,
  selectWhale,
}) => {
  const handleWhaleClick = (whale) => {
    selectWhale(whale);
    setDocumentTitle(whale ? `${whale.name} the ${whale.species}` : null);
  };

  return (
    <div className="shadow px-16 py-4 flex-1 flex flex-col gap-3 items-center justify-around">
      <h1 className="font-semibold text-2xl">
        Sonar readings for nearby whales
      </h1>
      <Filter color="green">
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-2" onClick={() => handleWhaleClick(null)}>
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {whales.map((whale) => (
            <WhaleIcon
              key={whale.id}
              whale={whale}
              selected={selectedWhale === whale}
              radius={radius}
              centerX={centerX}
              centerY={centerY}
              onClick={() => handleWhaleClick(whale)}
            />
          ))}
        </div>
        <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
      </Filter>
    </div>
  );
};

export default SonarDisplay;
