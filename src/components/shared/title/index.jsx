import React from "react"
import styled from "styled-components"

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
  color: ${props => (props.light ? props.theme.white : props.theme.dark)};
`
