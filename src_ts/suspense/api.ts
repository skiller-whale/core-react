import type { Whale } from "lib/apiTypes";

export const getWhales = async (term?: string, simulateNetworkError = false) => {
  // artificially slow things down to make it easier to see what's happening
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // simulate network error if needed
  if (simulateNetworkError) {
    throw new Error("Simulated network error");
  }

  const url = term ? `/api/whales?term=${term}` : "/api/whales";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching whales: ${response.statusText}`);
  }
  const data = await response.json();
  return data.animals as Whale[];
};
