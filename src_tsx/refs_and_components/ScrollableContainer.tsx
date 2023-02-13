import { forwardRef, useRef, useImperativeHandle } from "react"
import type { PropsWithChildren } from "react"

export type Ref = {
  scrollTop: () => void
}

const ScrollableContainer = ({ children }: PropsWithChildren<{}>) => {
    const divRef = useRef<HTMLDivElement>(null)

    const scrollTop = () => {
      if (divRef.current) {
        divRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    }
    return (
      <div className="relative overflow-auto max-h-[60vh]">
        {children}
      </div>
    )
  }

export default ScrollableContainer
