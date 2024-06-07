import { createRoot } from "react-dom/client";
import App from "./App";
import { initialWhales } from "./whales";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App whales={initialWhales} />);
