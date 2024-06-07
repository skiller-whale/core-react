import { createContext } from "react";

const pages = ["Whale Tracker", "Report a Sighting", "Whalepedia"];

export const PageContext = createContext(() => {});

export default pages;
