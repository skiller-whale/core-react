import {
  Children,
  type FC,
  type PropsWithChildren,
  cloneElement,
  useState,
} from "react"

type AccordionChildProps = PropsWithChildren<{
  title: string
  open?: boolean
  toggle?: () => void
}>

export const AccordionChild: FC<AccordionChildProps> = ({
  title,
  open,
  toggle,
  children,
}) => {
  return (
    <div>
      <div
        className="flex justify-between px-3 py-2 bg-gray-200 border-b border-gray-300 cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      <div className={`border-b border-gray-300 ${open ? "" : "hidden"}`}>
        {children}
      </div>
    </div>
  )
}

type AccordionProps = {
  children: ReturnType<typeof AccordionChild>[]
}

export const Accordion: FC<AccordionProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="border border-gray-300 border-b-0 mb-3">{children}</div>
  )
}
