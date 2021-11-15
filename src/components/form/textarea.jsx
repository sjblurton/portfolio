import { ErrorMessage, Field } from "formik"
import React from "react"
import styled from "styled-components"
import ErrorText from "./errorMessage"

export const Textarea = ({ name, label, rows = 5, cols = 20, ...props }) => {
  return (
    <>
      <InputContainer>
        <Field
          {...props}
          as="textarea"
          name={name}
          id={name}
          cols={cols}
          rows={rows}
        />
        <Label htmlFor={name}>
          <strong>{label}</strong>
        </Label>
      </InputContainer>
      <ErrorMessage component={ErrorText} name={name} />
    </>
  )
}

const InputContainer = styled.div`
  position: relative;
  display: block;
  color: ${props => props.theme.grey};
  margin-top: 16px;
  & textarea {
    display: block;
    width: 100%;
    max-width: 600px;
    height: auto;
    padding: 10px;
    overflow: visible;
    border: 0 solid ${props => props.theme.lightGrey};
    border-bottom-width: 1px;
    color: ${props => props.theme.dark};
    text-overflow: clip;
    background: ${props => props.theme.white};
    box-shadow: none;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    transform: none;
    transform-origin: 50% 50% 0;

    &:focus,
    &:active,
    &:focus-visible {
      border-bottom-width: 3px;
      border-color: ${props => props.theme.primary};
      outline-offset: none;
      outline: none;
    }
    &:focus + label {
      top: -15%;
    }
  }
`
const Label = styled.label`
  position: absolute;
  color: ${props => props.theme.dark};
  display: block;
  left: 8px;
  top: -10px;
  transition: top 250ms;
`
