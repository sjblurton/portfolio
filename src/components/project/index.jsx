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
import { ImagesData } from "../../service"

export function WorkCard(props) {
  const data = ImagesData()
  const { id, title, description, technologies, code, live } = props

  const imageData = data.allImageSharp.edges.filter(
    node => node.node.id === id
  )[0].node.gatsbyImageData

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
