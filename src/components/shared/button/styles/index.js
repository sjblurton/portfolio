import styled from "styled-components"
import { colors } from "../../../../theme/colors"

const variantOptions = {
  primary: {
    default: {
      backgroundColor: colors.primary,
      color: colors.white,
      border: `1px solid transparent`,
    },
    hover: {
      backgroundColor: colors.white,
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    },
  },
  secondary: {
    default: {
      backgroundColor: colors.white,
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    },
    hover: {
      backgroundColor: colors.primary,
      color: colors.white,
      border: `1px solid transparent`,
    },
  },
}

export const StyledButton = styled.button`
  ${props => variantOptions[props.variant]["default"]}
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-block: 8px;
  padding-inline: 16px;
  width: 100%;
  box-shadow: "0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)";
  border-radius: 8px;
  transition: all 250ms ease-in;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    ${props => variantOptions[props.variant]["hover"]}
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.primaryOpacity};
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    &:hover {
      transform: scale(1);
    }
  }
`
