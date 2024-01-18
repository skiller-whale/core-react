import {
  type ForwardedRef,
  type PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react"

export type ScrollableContainerRef = {
  scrollToTop: () => void
}

const ScrollableContainer = ({ children }: PropsWithChildren) => {
  const divRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    divRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div ref={divRef} className="overflow-auto flex flex-col gap-1">
      {children}
    </div>
  )
}

export default ScrollableContainer
