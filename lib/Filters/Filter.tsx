import type { PropsWithChildren } from "react";
import BlueFilter from "./BlueFilter";
import GreenFilter from "./GreenFilter";
import RedFilter from "./RedFilter";

type FilterProps = {
  color: Color;
};

export type Color = "green" | "blue" | "red";

const Filter = ({ color, children }: PropsWithChildren<FilterProps>) => {
  let FilterComponent;
  if (color === "green") {
    FilterComponent = GreenFilter;
  } else if (color === "blue") {
    FilterComponent = BlueFilter;
  } else {
    FilterComponent = RedFilter;
  }

  return <FilterComponent>{children}</FilterComponent>;
};

export default Filter;
