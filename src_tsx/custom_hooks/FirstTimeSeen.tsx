import {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  render: (
    refCallback: (target: HTMLElement | null) => void,
    firstTimeSeen: boolean,
  ) => ReactElement;
};

const FirstTimeSeen = ({ render }: Props) => {
  const [firstTimeSeen, setFirstTimeSeen] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const refCallback = useCallback((target: HTMLElement | null) => {
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
