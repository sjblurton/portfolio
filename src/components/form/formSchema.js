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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const onSubmit = (values, actions) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...values }),
  })
    .then(() => {
      alert("Success")
      actions.resetForm()
    })
    .catch(() => {
      alert("Error")
    })
    .finally(() => actions.setSubmitting(false))
}
