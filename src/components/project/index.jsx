import React, { useContext } from "react"
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
import { ImageContext } from "../../service"

export function WorkCard(props) {
  const { id, title, description, technologies, code, live } = props
  const { allImageSharp } = useContext(ImageContext)
  console.log(allImageSharp)
  let image = allImageSharp.edges.filter(node => node.node.id === id)[0].node
    .gatsbyImageData

  image = getImage(image)

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
