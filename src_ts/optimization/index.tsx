import { createRoot } from "react-dom/client";
import App from "./app1/App";
// import App from "./app2/App";
import { generateAquaticAnimals } from "./whales";

const aquaticAnimals = generateAquaticAnimals(50);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App aquaticAnimals={aquaticAnimals} />);
