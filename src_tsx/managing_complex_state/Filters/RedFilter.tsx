import type { FC, PropsWithChildren } from "react"

const RedFilter: FC<PropsWithChildren> = ({ children }) => (
  <span
    style={{
      filter:
        "invert(12%) sepia(100%) saturate(7239%) hue-rotate(1deg) brightness(111%) contrast(110%)",
    }}
  >
    {children}
  </span>
)

export default RedFilter
