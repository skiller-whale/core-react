type Props = {
  label: string;
  isActive: boolean;
  onClick?: () => void;
};

const Tab = () => <a></a>;

const tabStyle = (isActive: boolean) =>
  `flex-1 p-3 ${isActive ? "bg-gray-300" : "bg-gray-100"} cursor-pointer`;

export default Tab;
