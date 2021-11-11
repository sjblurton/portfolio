import React from "react"
import styled from "styled-components"

const Grid = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export default Grid

const Wrapper = styled.div`
  display: flex;
  width: clamp(252px, 95%, 1300px);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;
  margin: auto;
`
