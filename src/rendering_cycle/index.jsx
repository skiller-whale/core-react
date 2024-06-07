import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// fetch whales data from the server
const response = await fetch("/api/aquatic-animals/whales/", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const { animals } = await response.json();

// initialise the app
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App whales={animals} />);
