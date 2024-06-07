import { useLayoutEffect, useRef, useState } from "react";

const Tooltip = ({ children }) => {
  const ref = useRef(null);
  const anchorRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useLayoutEffect(() => {
    const height = ref.current?.getBoundingClientRect().height ?? 0;
    const boundingRect = anchorRef.current?.getBoundingClientRect();
    if (boundingRect) {
      setX(boundingRect.right);
      if (boundingRect.top > height) {
        setY(boundingRect.top + window.scrollY - height);
      } else {
        setY(boundingRect.bottom + window.scrollY);
      }
    }
  }, []);

  const style = {
    left: x,
    top: y,
  };

  return (
    <div ref={anchorRef}>
      <div
        className="absolute text-base font-normal border border-gray-200 rounded shadow mb-6 w-64 bg-white z-10"
        style={style}
        ref={ref}
      >
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default Tooltip;
