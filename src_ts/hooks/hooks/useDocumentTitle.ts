import { useEffect, useRef } from "react";

const originalDocumentTitle = document.title;

const setDocumentTitle = (title: string | null) => {
  if (title) {
    document.title = title;
  } else {
    document.title = originalDocumentTitle;
  }
};

export default setDocumentTitle;
