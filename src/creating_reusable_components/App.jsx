import { useState } from "react";
import DebouncedInput from "./DebouncedInput";
import FishTable from "./FishTable";
import WhaleInput from "./WhaleInput";
import WhaleTable from "./WhaleTable";

const App = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="flex flex-col gap-3 p-6 m-[-2.5rem]">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-center mb-4">
        <div className="flex gap-3 justify-end">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 rounded-none px-2 py-1 h-10"
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <WhaleTable term={term} />
        <FishTable term={term} />
      </div>
    </div>
  );
};

export default App;
