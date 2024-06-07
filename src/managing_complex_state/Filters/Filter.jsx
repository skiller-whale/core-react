import BlueFilter from "./BlueFilter";
import GreenFilter from "./GreenFilter";
import RedFilter from "./RedFilter";

const Filter = ({ color, children }) => {
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
