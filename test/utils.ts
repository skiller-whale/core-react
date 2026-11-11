import { waitFor, waitForElementToBeRemoved, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ModuleKey } from "../server/types"
import type { Whale } from "../lib/apiTypes";
import type { AquaticAnimal } from "../src_ts/optimization/whales";
import { use } from "react";

export const whales: Whale[] = [
  {
    id: "1",
    name: "Whale 1",
    species: "Whale",
    weight: 1000,
    location: { x: 0, y: 0, depth: 0 },
    hasBaleen: true,
  },
];

export const whalesProps = whales.map((whale) => ({
  ...whale,
  about: whale.name,
}));

export const mockedApiResponse = {
  ok: true,
  json: () => Promise.resolve({ animals: whales }),
} as Response;

export const initialise = async (container: HTMLElement, module: ModuleKey) => {
  switch (module) {
    case "reusable_components": {
      await waitFor(()=> {
        within(container).getAllByRole("table");
      });
      break;
    }
    case "errors": {
      const user = userEvent.setup();
      const fetchGoodDataButton = within(container).getByRole("button", { name: "Fetch Good Data" });
      await user.click(fetchGoodDataButton);
      await waitFor(() => {
        within(container).getByRole("table");
      });
      break;
    }
    case "complex_state": {
      const initialisingText = within(container).getByText("Initialising...");
      await waitForElementToBeRemoved(initialisingText);
      break;
    }
    case "deferred_updates": {
      await waitFor(() => {
        within(container).getByRole("row");
      });
      break;
    }
    case "suspense": {
      // the suspense api artificially delays responses by 1.5 seconds
      await within(container).findByText(whales[0].name, {}, { timeout: 3000 });
      break;
    }
  }
};

// fixed data for the optimization module (which otherwise generates random animals)
export const aquaticAnimals: AquaticAnimal[] = [
  { id: "1", name: "Ada", species: "Bottlenose Dolphin", isWhale: true },
  { id: "2", name: "Bob", species: "Blue Whale", isWhale: true },
  { id: "3", name: "Cat", species: "Clownfish", isWhale: false },
];

export const users = [
  { username: "ada", species: "Skiller Whale" },
];
