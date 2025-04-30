import {
  type Dispatch,
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import type { Whale } from "lib/apiTypes";

export type WhalesState =
  | { initialising: true }
  | {
      initialising: false;
      whales: Whale[];
      selectedWhaleId: string;
    };

type WhalesAction =
  | { type: "initialise"; whales: Whale[] }
  | { type: "setSelectedWhaleId"; id: string }
  | { type: "setSelectedWhaleX"; x: number }
  | { type: "setSelectedWhaleY"; y: number };

const initialState: WhalesState = {
  initialising: true,
};

export const updateWhaleCoordinate = (
  whale: Whale,
  coordinate: "x" | "y",
  value: number,
): Whale => ({
  ...whale,
  location: {
    ...whale.location,
    [coordinate]: Math.min(100, Math.max(-100, value)),
  },
});

const reducer = (state: WhalesState, action: WhalesAction): WhalesState => {
  switch (action.type) {
    case "initialise":
      return {
        initialising: false,
        whales: action.whales,
        selectedWhaleId: action.whales[0].id,
      };
    case "setSelectedWhaleId":
      return state.initialising
        ? state
        : { ...state, selectedWhaleId: action.id };
    case "setSelectedWhaleX":
      return state.initialising
        ? state
        : {
            ...state,
            whales: state.whales.map((whale) =>
              whale.id === state.selectedWhaleId
                ? updateWhaleCoordinate(whale, "x", action.x)
                : whale,
            ),
          };
    case "setSelectedWhaleY":
      return state.initialising
        ? state
        : {
            ...state,
            whales: state.whales.map((whale) =>
              whale.id === state.selectedWhaleId
                ? updateWhaleCoordinate(whale, "y", action.y)
                : whale,
            ),
          };
    default:
      return state;
  }
};

const WhalesContext = createContext<WhalesState>(initialState);

const SetWhalesContext = createContext<Dispatch<WhalesAction>>(() => {});

export const useWhalesContext = () => useContext(WhalesContext);

export const useSetWhalesContext = () => useContext(SetWhalesContext);

const WhalesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WhalesContext.Provider value={state}>
      <SetWhalesContext.Provider value={dispatch}>
        {children}
      </SetWhalesContext.Provider>
    </WhalesContext.Provider>
  );
};

export default WhalesProvider;
