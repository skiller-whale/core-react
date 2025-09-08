import { createRoot } from "react-dom/client";
import { getUsers } from "./api";
import App from "./App";

const initialUsers = await getUsers();

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App initialUsers={initialUsers.data} />);
