import type { Whale } from "lib/apiTypes";

type Props = {
  name: string;
  species: string;
  location: Location;
};

type Location = {
  x: number;
  y: number;
};

const WhalesTableRow = (name: string, species: string, location: Location) => (
  <></>
);

const styles = {
  row: "border-b even:bg-gray-100",
  cell: "py-2 px-3",
  iconCell: "py-2 px-3 text-3xl text-center",
};

const icons = {
  dolphin: "🐬",
  whale: "🐳",
};

export default WhalesTableRow;
