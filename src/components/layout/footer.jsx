import React from "react"
import styled from "styled-components"
import { colors } from "../../theme/colors"

const Footer = () => {
  return <Foot>© {new Date().getFullYear()}, Simon Blurton</Foot>
}

export default Footer

const Foot = styled.footer`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.header};
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: clamp(8px, 15%, 200px);
  padding-block: 8px;
  margin-top: 2rem;
`
