import {
  type FormHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

type Props = FormHTMLAttributes<HTMLFormElement> & {
  onFormData?: (event: FormDataEvent) => void;
};

const Form = forwardRef<HTMLFormElement, Props>(
  ({ children, onFormData, ...rest }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => formRef.current as HTMLFormElement);

    useEffect(() => {
      if (onFormData) {
        formRef.current?.addEventListener("formdata", onFormData);

        return () => {
          formRef.current?.removeEventListener("formdata", onFormData);
        };
      }
    }, []);

    return (
      <form ref={formRef} {...rest}>
        {children}
      </form>
    );
  },
);

export default Form;
