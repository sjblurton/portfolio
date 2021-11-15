import React from "react"

import { Card, Description } from "./styles"

const AboutCard = ({ id, title, description, ...restProps }) => {
  return (
    <Card {...restProps}>
      <h2>{title}</h2>
      <Description>{description}</Description>
    </Card>
  )
}

export default AboutCard
