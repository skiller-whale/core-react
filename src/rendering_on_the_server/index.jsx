import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./Components/App";

const props = {
  numberOfWhales: 5,
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App {...props} />);
