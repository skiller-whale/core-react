import { useCallback, useEffect, useRef, useState } from "react";

export const setPageTitle = (title: string | null) => {
  const originalTitleRef = useRef(document.title);

  useEffect(() => {
    const originalTitle = originalTitleRef.current;
    document.title = title ?? originalTitle;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export const useLoopingCounter = () => {};

export const useFirstTimeSeen = () => {};
