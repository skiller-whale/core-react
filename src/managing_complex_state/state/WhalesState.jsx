import { createContext, useContext, useEffect, useReducer } from "react"

const initialState = {
  initialising: true,
}

const updateWhaleCoordinate = (whale, coordinate, value) => ({
  ...whale,
  location: {
    ...whale.location,
    [coordinate]: Math.min(100, Math.max(-100, value)),
  },
})

const reducer = (state, action) => {
  switch (action.type) {
    case "initialised":
      return {
        initialising: false,
        whales: action.whales,
        favWhaleId: action.whales[0].id,
      }
    case "setFavWhale":
      return state.initialising ? state : { ...state, favWhaleId: action.id }
    case "setFavWhaleX":
      return state.initialising
        ? state
        : {
            ...state,
            whales: state.whales.map((whale) =>
              whale.id === state.favWhaleId
                ? updateWhaleCoordinate(whale, "x", action.x)
                : whale,
            ),
          }
    case "setFavWhaleY":
      return state.initialising
        ? state
        : {
            ...state,
            whales: state.whales.map((whale) =>
              whale.id === state.favWhaleId
                ? updateWhaleCoordinate(whale, "y", action.y)
                : whale,
            ),
          }
    default:
      return state
  }
}

const WhalesContext = createContext(initialState)
const SetWhalesContext = createContext(() => {})

export const useWhalesContext = () => useContext(WhalesContext)

export const useSetWhalesContext = () => useContext(SetWhalesContext)

const WhalesStateProvider = ({ children }) => {
  // implement this component
  return <>{children}</>
}

export default WhalesStateProvider
