import styled from "styled-components"

export const Card = styled.div`
  width: clamp(252px, 100%, 330px);
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: ${props => props.theme.white};
`

export const ButtonContainer = styled.div`
  width: 90%;
  margin-inline: auto;
  margin-block: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const Description = styled.p`
  width: 90%;
  margin-inline: 16px;
`
export const Title = styled.h2`
  margin-inline: 16px;
`
export const List = styled.ul`
  margin-inline: 16px;
`
