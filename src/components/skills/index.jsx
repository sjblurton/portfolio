import React from "react"
import styled from "styled-components"

const WhiteSection = ({ children, ...restProps }) => {
  return <Section {...restProps}>{children}</Section>
}

export default WhiteSection

const Section = styled.section`
  padding-block: 32px;
  padding-inline: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`
