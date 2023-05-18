import { forwardRef, useImperativeHandle, useRef } from "react"

const ScrollableContainer = ({ children }) => {
  const divRef = useRef(null)

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
