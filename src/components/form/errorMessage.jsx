import React from "react"
import styled from "styled-components"
import { colors } from "../../theme/colors"

const ErrorText = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export default ErrorText

const Wrapper = styled.div`
  position: relative;
  color: ${props => props.theme.error};
  background-color: ${colors.errorOpacity};
  padding: 8px;
  border-radius: 8px;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.errorOpacity};
    top: -10px;
  }
`
