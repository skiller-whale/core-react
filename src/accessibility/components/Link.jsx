import { useContext } from "react";
import { PageContext } from "../pages";

const Link = ({ page, cetacean, ...rest }) => {
  const setPage = useContext(PageContext);

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        setPage(page, cetacean);
      }}
      {...rest}
    >
      {cetacean ?? page}
    </a>
  );
};

export default Link;
