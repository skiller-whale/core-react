import {
  type FormHTMLAttributes,
  type RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

type Props = FormHTMLAttributes<HTMLFormElement> & {
  ref?: RefObject<HTMLFormElement>;
  onFormData?: (event: FormDataEvent) => void;
};

const Form = ({ children, onFormData, ref, ...rest }: Props) => {
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
};

export default Form;
