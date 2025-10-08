import { useState } from "react";
import type { RefObject } from "react";
import { getInputElements, isVisibleElement } from "../utils";

const useFormPages = <Page extends string>(pages: readonly Page[]) => {
  const [page, setPage] = useState(pages[0]);

  const previousPage = () => {
    const currentIndex = pages.indexOf(page);
    if (currentIndex > 0) {
      setPage(pages[currentIndex - 1]);
    }
  };

  const nextPage = () => {
    const currentIndex = pages.indexOf(page);
    if (currentIndex < pages.length - 1) {
      setPage(pages[currentIndex + 1]);
    }
  };

  return [page, previousPage, nextPage] as const;
};

export default useFormPages;
