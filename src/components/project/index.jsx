import React from "react"
import { Button } from "../shared"
import { ButtonContainer, Card, Description, List, Title } from "./styles"

export function WorkCard(props) {
  const { image, title, description, technologies, code, live } = props

  return (
    <Card>
      {image}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <List>
        {technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </List>
      <ButtonContainer>
        <Button href={code} variant="primary">
          View Code
        </Button>
        <Button href={live} variant="secondary">
          Live View
        </Button>
      </ButtonContainer>
    </Card>
  )
}
