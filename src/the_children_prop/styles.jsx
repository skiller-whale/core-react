import { useState } from "react"

export const Button = ({ onClick }) => (
  <button
    className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
    onClick={onClick}
  ></button>
)
export const TwoColumns = () => (
  <div className="flex gap-3 p-3">
    <div className="flex-1"></div>
    <div className="w-52"></div>
  </div>
)
export const CollapsibleContainer = ({ title }) => {
  return (
    <div className="border border-gray-300 mb-3">
      <div className="flex justify-between px-3 py-2 bg-gray-200 border-b border-gray-300 cursor-pointer">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span>{"▲" ?? "▼"}</span>
      </div>
      <div className={"" ?? "hidden"}></div>
    </div>
  )
}
