import {
  Component,
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from "react"

type ErrorBoundaryProps = PropsWithChildren<{}>

type ErrorBoundaryState = {}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {}

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-300 text-red-700 px-4 py-2">{message}</div>
)
