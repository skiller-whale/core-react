import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Dropdown = forwardRef(({ name, children }, dropdownRef) => {
  const [expanded, setExpanded] = useState(false);

  const menuRef = useRef(null);
  useImperativeHandle(dropdownRef, () => ({
    open: () => setExpanded(true),
    close: () => setExpanded(false),
  }));

  const toggleMenu = (event) => {
    event.stopPropagation();
    setExpanded((expanded) => !expanded);
  };

  const enterMenu = (event) => {
    const firstChild = menuRef.current?.firstElementChild;
    if (event.key === "ArrowDown" && firstChild instanceof HTMLElement) {
      event.stopPropagation();
      firstChild.focus();
    }
  };

  const moveUpOrDown = (event) => {
    const previous = document.activeElement?.previousElementSibling;
    const next = document.activeElement?.nextElementSibling;
    // complete this function
  };

  return (
    <div className="relative flex flex-1" onKeyUp={moveUpOrDown}>
      <button
        className="flex justify-between flex-1 p-3 bg-blue-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
        onClick={toggleMenu}
        onKeyUp={enterMenu}
      >
        <span>{name}</span>
        <span>{expanded ? "▲" : "▼"}</span>
      </button>
      {expanded && (
        <nav
          className="absolute left-0 right-0 z-10 flex flex-col mt-12"
          ref={menuRef}
        >
          {children}
        </nav>
      )}
    </div>
  );
});

export default Dropdown;
