import { getImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { ImageContext } from "../../service"
import { Card, Description, Image } from "./styles"

const AboutCard = ({ id, title, description, ...restProps }) => {
  const { allImageSharp } = useContext(ImageContext)
  const imageData = allImageSharp.edges.filter(node => node.node.id === id)[0]
    .node.gatsbyImageData
  const image = getImage(imageData)

  return (
    <Card {...restProps}>
      <h2>{title}</h2>
      <Description>{description}</Description>
      <Image image={image} alt={title} />
    </Card>
  )
}

export default AboutCard
