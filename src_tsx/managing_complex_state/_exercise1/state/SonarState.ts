export type SonarState = {
  centerX: number
  centerY: number
  radius: number
}

export type SonarAction =
  | { type: "zoomIn" }
  | { type: "zoomOut" }
  | { type: "moveLeft" }
  | { type: "moveRight" }
  | { type: "moveUp" }
  | { type: "moveDown" }

export const initialState: SonarState = {
  centerX: 0,
  centerY: 0,
  radius: 50,
}

export const reducer = (state: SonarState, action: SonarAction): SonarState => {
  switch (action.type) {
    case "zoomIn":
      return { ...state, radius: Math.max(20, state.radius - 10) }
    case "zoomOut":
      return { ...state, radius: Math.min(100, state.radius + 10) }
    case "moveLeft":
      return { ...state, centerX: Math.max(-100, state.centerX - 10) }
    case "moveRight":
      return { ...state, centerX: Math.min(100, state.centerX + 10) }
    case "moveUp":
      return { ...state, centerY: Math.max(-100, state.centerY - 10) }
    case "moveDown":
      return { ...state, centerY: Math.min(100, state.centerY + 10) }
    default:
      return state
  }
}
