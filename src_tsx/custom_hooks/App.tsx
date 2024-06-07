import { useState } from "react";
import FirstTimeSeen from "./FirstTimeSeen";
import NewWhaleForm from "./NewWhaleForm";
import Whale from "./Whale";
import type { WhaleProps } from "./whales";

type Props = {
  whales: WhaleProps[];
};

const App = ({ whales: initialWhales }: Props) => {
  const [whales, setWhales] = useState(initialWhales);
  const addWhale = (whale: WhaleProps, position: number) => {
    if (whale.id) {
      setWhales((whales) => [
        ...whales.slice(0, position),
        whale,
        ...whales.slice(position),
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-start">
        <div className="flex flex-col gap-3">
          <div className="relative overflow-auto max-h-[75vh]">
            {whales.map((whale) => (
              <FirstTimeSeen
                key={whale.id}
                render={(ref, firstTimeSeen) => (
                  <Whale ref={ref} firstTimeSeen={firstTimeSeen} {...whale} />
                )}
              />
            ))}
          </div>
          <NewWhaleForm addWhale={addWhale} numberOfWhales={whales.length} />
        </div>
      </div>
    </div>
  );
};

export default App;
