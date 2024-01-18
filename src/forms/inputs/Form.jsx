import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

const Form = forwardRef(({ children, onFormData, ...rest }, ref) => {
  const formRef = useRef(null)
  useImperativeHandle(ref, () => formRef.current)
  useEffect(() => {
    if (onFormData) {
      formRef.current?.addEventListener("formdata", onFormData)

      return () => {
        formRef.current?.removeEventListener("formdata", onFormData)
      }
    }
  }, [])

  return (
    <form ref={formRef} {...rest}>
      {children}
    </form>
  )
})

export default Form
