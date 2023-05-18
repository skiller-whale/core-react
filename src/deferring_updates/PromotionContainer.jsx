import {
  useEffect,
  useState,
  Suspense,
  lazy,
  useTransition,
  useDeferredValue,
} from "react"
import { ErrorBoundary } from "react-error-boundary"
import LoadingSpinner from "./LoadingSpinner"

const Promotion1 = lazy(() => import("./Promotion1"))

const Promotion2 = lazy(() => import("./Promotion2"))

const PromotionContainer = () => {
  const [promotion, setPromotion] = useState(1)

  useEffect(() => {
    const timer = setInterval(
      () => setPromotion((current) => (current + 1) % 2),
      5000
    )

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex rounded-md bg-cyan-500 text-white p-4 h-[22rem]">
      <ErrorBoundary fallback={<span>Something went wrong</span>}>
        <Suspense fallback={<LoadingSpinner />}>
          {promotion === 1 ? <Promotion1 /> : <Promotion2 />}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default PromotionContainer
