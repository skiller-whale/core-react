import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  initialising: true,
};

export const updateWhaleCoordinate = (whale, coordinate, value) => ({
  ...whale,
  location: {
    ...whale.location,
    [coordinate]: Math.min(100, Math.max(-100, value)),
  },
});

const reducer = (state, action) => {
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

const WhalesContext = createContext(initialState);
const SetWhalesContext = createContext(() => {});

export const useWhalesContext = () => useContext(WhalesContext);

export const useSetWhalesContext = () => useContext(SetWhalesContext);

const WhalesProvider = ({ children }) => {
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
