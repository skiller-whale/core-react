import { forwardRef, useImperativeHandle, useRef } from "react";

const ScrollableContainer = ({ children }) => {
  const divRef = useRef(null);
  const scrollToTop = () => {
    divRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={divRef} className="overflow-auto flex flex-col gap-1">
      {children}
    </div>
  );
};

export default ScrollableContainer;
