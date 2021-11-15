import React from "react"
import { Card, Description } from "./styles"

const AboutCard = ({ image, id, title, description, ...restProps }) => {
  return (
    <Card {...restProps}>
      <h2>{title}</h2>
      <Description>{description}</Description>
      {image}
    </Card>
  )
}

export default AboutCard
