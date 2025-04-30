import { renderToString } from "react-dom/server";
import App from "./App";

// fetch whales data from the server
const response = await fetch("/api/whales", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const { animals } = await response.json();

// initialise the app
const root = document.getElementById("root");
const appHTML = renderToString(<App whales={animals} />);
root.innerHTML = appHTML;
