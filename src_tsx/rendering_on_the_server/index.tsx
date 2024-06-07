import { createRoot, hydrateRoot } from "react-dom/client";
import App, { type Props } from "./Components/App";

declare global {
  interface Window {
    __INITIAL_PROPS__: Props;
  }
}

const props: Props = {
  numberOfWhales: 5,
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App {...props} />);
