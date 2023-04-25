import { lazy, Suspense } from "react"
import LoadingSpinner from "./LoadingSpinner"
import SmallPrint from "./SmallPrint"

const Mascot = lazy(() => import("./Mascot"))

const TermsAndConditions = () => (
  <>
    <Suspense fallback={<LoadingSpinner />}>
      <Mascot />
    </Suspense>
    <SmallPrint />
  </>
)

export default TermsAndConditions
