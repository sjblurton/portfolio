import { getImage } from "gatsby-plugin-image"
import React from "react"
import { Card, Description, Image } from "./styles"

const AboutCard = ({
  image: imageData,
  id,
  title,
  description,
  ...restProps
}) => {
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
