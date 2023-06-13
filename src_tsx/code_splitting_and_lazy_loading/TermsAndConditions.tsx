import { type FC, Suspense, lazy } from "react"
import LoadingSpinner from "./LoadingSpinner"
import SmallPrint from "./SmallPrint"

const Mascot = lazy(() => import("./Mascot"))

const TermsAndConditions: FC = () => (
  <>
    <Suspense fallback={<LoadingSpinner />}>
      <Mascot />
    </Suspense>
    <SmallPrint />
  </>
)

export default TermsAndConditions
