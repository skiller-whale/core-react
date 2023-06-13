import { createPortal } from "react-dom"

const PopOver = ({ info, buttonBoundingRect }) => {
  const positionStyle1 = {
    left: (buttonBoundingRect?.width ?? 0) / 2,
    top: 0,
  }

  const positionStyle2 = {
    left: (buttonBoundingRect?.x ?? 0) + (buttonBoundingRect?.width ?? 0) / 2,
    top: buttonBoundingRect?.y ?? 0,
  }

  return (
    <div
      className="absolute border border-gray-200 rounded shadow mb-6 w-64 bg-white z-10 -translate-x-32 -translate-y-full"
      style={positionStyle1}
    >
      <div className="p-3">{info}</div>
    </div>
  )
}

export default PopOver
