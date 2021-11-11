import * as Yup from "yup"

export const initialValues = {
  name: "",
  email: "",
  message: "",
}

export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
})

export const onSubmit = (values, submitProps) => {
  console.log("Form data", values)
  console.log("submitProps", submitProps)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}
