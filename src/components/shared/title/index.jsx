import React from "react"
import styled from "styled-components"
import { colors } from "../../../theme/colors"

const Title = ({ light = false, children, ...restProps }) => {
  return (
    <Styling light={light} {...restProps}>
      {children}
    </Styling>
  )
}

export default Title

const Styling = styled.h1`
  text-align: center;
  color: ${props => (props.light ? colors.white : colors.dark)};
`
