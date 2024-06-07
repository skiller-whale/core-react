import { useCallback, useEffect, useRef, useState } from "react";

export const setPageTitle = (title) => {
  const originalTitleRef = useRef(document.title);
  useEffect(() => {
    const originalTitle = originalTitleRef.current;
    document.title = title;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export const useLoopingCounter = () => {};

export const useFirstTimeSeen = () => {};
