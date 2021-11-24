import React from "react"
import { Card, Description, Title } from "./styles"

const AboutCard = ({ image, id, title, description, ...restProps }) => {
  return (
    <Card {...restProps}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {image}
    </Card>
  )
}

export default AboutCard
