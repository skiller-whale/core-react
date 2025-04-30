import {
  type ComponentProps,
  type KeyboardEvent,
  type MouseEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type DropdownRef = {
  open: () => void;
  close: () => void;
};

type Props = ComponentProps<"button"> & {
  name: string;
};

const Dropdown = forwardRef<DropdownRef, Props>(
  ({ name, children }, dropdownRef) => {
    const [expanded, setExpanded] = useState(false);

    const menuRef = useRef<HTMLElement>(null);
    useImperativeHandle(dropdownRef, () => ({
      open: () => setExpanded(true),
      close: () => setExpanded(false),
    }));

    const toggleMenu = (event: MouseEvent) => {
      event.stopPropagation();
      setExpanded((expanded) => !expanded);
    };

    const enterMenu = (event: KeyboardEvent) => {
      const firstChild = menuRef.current?.firstElementChild;
      if (event.key === "ArrowDown" && firstChild instanceof HTMLElement) {
        event.stopPropagation();
        firstChild.focus();
      }
    };

    const moveUpOrDown = (event: KeyboardEvent) => {
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
  },
);

export default Dropdown;
