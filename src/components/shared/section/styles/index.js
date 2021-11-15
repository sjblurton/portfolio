import styled, { css } from "styled-components"

export const ColoredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: ${props => props.theme.primary};
  width: 100%;
  min-height: 100vh;
  padding-block: 60px;
  padding-inline: clamp(8px, 5%, 32px);
  gap: 32px;
`

export const CommonStyle = css`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 30px;
  }
  & #shape-fill {
    fill: ${props => props.theme.white};
  }
`

export const TopWave = styled.div`
  ${CommonStyle}
  top: 0;
`

export const BottomWave = styled.div`
  ${CommonStyle}
  bottom: 0;
  transform: rotate(180deg);
`
