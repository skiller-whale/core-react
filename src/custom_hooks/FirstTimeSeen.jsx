import { useCallback, useEffect, useRef, useState } from "react";

const FirstTimeSeen = ({ render }) => {
  const [firstTimeSeen, setFirstTimeSeen] = useState(false);
  const observer = useRef(null);
  const refCallback = useCallback((target) => {
    if (!target) {
      observer.current?.disconnect();
      observer.current = null;

      return;
    }
    observer.current = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setFirstTimeSeen(true);
          observer.current?.disconnect();
          observer.current = null;
        }
      },
      { root: document },
    );
    observer.current?.observe(target);
  }, []);
  useEffect(() => {
    if (!firstTimeSeen) {
      return;
    }
    const timeout = setTimeout(() => {
      setFirstTimeSeen(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [firstTimeSeen]);

  return render(refCallback, false);
  // return render(refCallback, firstTimeSeen)
};

export default FirstTimeSeen;
