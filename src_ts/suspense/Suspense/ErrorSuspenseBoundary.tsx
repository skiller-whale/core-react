import type { PropsWithChildren, ReactNode } from "react";
import { Suspense } from "react";
import type { ErrorBoundaryPropsWithFallback } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import LoadingSpinner from "./LoadingSpinner";

type Props = PropsWithChildren<
  Omit<ErrorBoundaryPropsWithFallback, "fallback"> & {
    errorFallback?: ErrorBoundaryPropsWithFallback["fallback"];
    suspenseFallback?: ReactNode;
  }
>;

// TODO: implement this component
const ErrorSuspenseBoundary = ({ children }: Props) => (
  <></>
);

export default ErrorSuspenseBoundary;
