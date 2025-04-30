import { createRoot } from "react-dom/client";
import App from "./App";

const response = await fetch("/api/whales", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const { animals } = await response.json();

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App initialWhales={animals} />);
