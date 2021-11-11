import React from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { Button } from "../shared"
import { initialValues, onSubmit, validationSchema } from "./formSchema"
import { colors } from "../../theme/colors"

const FormikForm = ({ children, formValues, ...restProps }) => {
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...restProps}
    >
      {formik => {
        return (
          <StyledForm>
            {children}
            <Button
              {...restProps}
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              formik={formik}
            >
              Submit
            </Button>
          </StyledForm>
        )
      }}
    </Formik>
  )
}

export default FormikForm

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${colors.primaryMaxOpacity};
  padding: 32px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
`
