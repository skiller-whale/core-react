import { Component } from "react"

export class ErrorBoundary extends Component {}

export const ErrorMessage = ({ message }) => (
  <div className="bg-red-300 text-red-700 px-4 py-2">{message}</div>
)
