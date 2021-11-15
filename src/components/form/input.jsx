import { ErrorMessage, Field } from "formik"
import React from "react"
import styled from "styled-components"
import ErrorText from "./errorMessage"

export const Input = ({ type, name, label, ...props }) => {
  return (
    <>
      <InputContainer {...props}>
        <StyledInput type={type} name={name} id={name} />
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
  background: ${props => props.theme.primaryOpacity};
  margin-top: 16px;
`
const Label = styled.label`
  position: absolute;
  left: 8px;
  bottom: 30px;
  transition: bottom 250ms;
`
const StyledInput = styled(Field)`
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
    bottom: 100%;
  }
`
