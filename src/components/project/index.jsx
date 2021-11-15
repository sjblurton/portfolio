import React from "react"
import { Button } from "../shared"
import {
  ButtonContainer,
  Card,
  Description,
  Image,
  List,
  Title,
} from "./styles"
import { getImage } from "gatsby-plugin-image"

export function WorkCard(props) {
  const {
    image: imageData,
    title,
    description,
    technologies,
    code,
    live,
  } = props

  const image = getImage(imageData)

  return (
    <Card>
      <Image image={image} alt={title} />
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
