import {
  type Dispatch,
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react"
import type { Whale } from "../../lib/apiTypes"

export type WhalesState =
  | { initialising: true }
  | {
      initialising: false
      whales: Whale[]
      favWhaleId: string
    }

type WhalesAction =
  | { type: "initialised"; whales: Whale[] }
  | { type: "setFavWhale"; id: string }
  | { type: "setFavWhaleX"; x: number }
  | { type: "setFavWhaleY"; y: number }

const initialState: WhalesState = {
  initialising: true,
}

const updateWhaleCoordinate = (
  whale: Whale,
  coordinate: "x" | "y",
  value: number,
): Whale => ({
  ...whale,
  location: {
    ...whale.location,
    [coordinate]: Math.min(100, Math.max(-100, value)),
  },
})

const reducer = (state: WhalesState, action: WhalesAction): WhalesState => {
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

const WhalesContext = createContext<WhalesState>(initialState)

const SetWhalesContext = createContext<Dispatch<WhalesAction>>(() => {})

export const useWhalesContext = () => useContext(WhalesContext)

export const useSetWhalesContext = () => useContext(SetWhalesContext)

const WhalesStateProvider = ({ children }: PropsWithChildren) => {
  // implement this component
  return <>{children}</>
}

export default WhalesStateProvider
