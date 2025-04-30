import { type ComponentProps, useContext } from "react";
import { type Page, PageContext } from "../pages";

type Props = ComponentProps<"a"> & {
  page: Page;
  cetacean?: string;
};

const Link = ({ page, cetacean, ...rest }: Props) => {
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
