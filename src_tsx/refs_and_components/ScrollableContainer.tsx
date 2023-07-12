import {
  type ForwardedRef,
  type PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react"

export type ScrollableContainerRef = {
  scrollTop: () => void
}

const ScrollableContainer = ({ children }: PropsWithChildren) => {
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
    <div ref={divRef} className="relative overflow-auto max-h-96">
      {children}
    </div>
  )
}

export default ScrollableContainer
