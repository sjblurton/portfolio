import styled from "styled-components"

export const Card = styled.div`
  position: relative;
  width: clamp(252px, 100%, 330px);
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: ${props => props.theme.white};
  gap: 16px;
  overflow: hidden;
  justify-content: space-between;
  padding-top: 16px;
`
export const Title = styled.h2`
  text-align: center;
`
export const Description = styled.p`
  width: 90%;
  margin-inline: auto;
`
