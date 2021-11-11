import styled from "styled-components"
import { colors } from "../../../theme/colors"

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: clamp(265px, 85%, 540px);
  align-items: center;
`

export const Span = styled.span`
  color: ${colors.primary};
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 75%;
`
