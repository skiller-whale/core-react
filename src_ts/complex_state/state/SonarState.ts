export type SonarState = {
  centerX: number;
  centerY: number;
  radius: number;
};

export type SonarAction =
  | { type: "zoomIn" }
  | { type: "zoomOut" }
  | { type: "moveLeft" }
  | { type: "moveRight" }
  | { type: "moveUp" }
  | { type: "moveDown" };

export const initialState: SonarState = {
  centerX: 0,
  centerY: 0,
  radius: 50,
};

export const reducer = (state: SonarState, action: SonarAction): SonarState => {
  // complete the implementation of this function
  return state;
};
