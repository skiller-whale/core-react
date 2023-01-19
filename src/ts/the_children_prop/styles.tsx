import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react"
import { useState } from "react"

type ButtonProps = PropsWithChildren<{
  onClick: MouseEventHandler<HTMLButtonElement>
}>

export const Button: FC<ButtonProps> = ({ onClick }) => (
  <button
    className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
    onClick={onClick}
  ></button>
)

type TwoColumnsProps = {
  children: [ReactNode, ReactNode]
}

export const TwoColumns: FC<TwoColumnsProps> = () => (
  <div className="flex gap-3 p-3">
    <div className="flex-1"></div>
    <div className="w-52"></div>
  </div>
)

type CollapsibleContainerProps = {
  title: string
}

export const CollapsibleContainer: FC<CollapsibleContainerProps> = ({
  title,
}) => {
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
