import styled from "styled-components"
import { colors } from "../../../../theme/colors"

export const Skill = styled.a`
  width: ${props => (props.size === "large" ? "100px" : "64px")};
  height: ${props => (props.size === "large" ? "100px" : "64px")};
  background: ${colors.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
  transition: transform 250ms;
  cursor: pointer;

  & svg {
    height: ${props => (props.size === "large" ? "64px" : "32px")};
    width: ${props => (props.size === "large" ? "64px" : "32px")};
  }

  &:hover {
    transform: scale(1.1);
  }
`
