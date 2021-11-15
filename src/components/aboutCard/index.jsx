import { getImage } from "gatsby-plugin-image"
import React, { useContext, useEffect, useState } from "react"
import { ImageContext } from "../../service"
import { Card, Description, Image } from "./styles"

const AboutCard = ({ id, title, description, ...restProps }) => {
  const [image, setImage] = useState(null)
  const { allImageSharp } = useContext(ImageContext)

  useEffect(() => {
    if (allImageSharp) {
      setImage(
        getImage(
          allImageSharp?.edges.filter(node => node.node.id === id)[0].node
            .gatsbyImageData
        )
      )
    }
  }, [allImageSharp, id])

  return (
    <Card {...restProps}>
      <h2>{title}</h2>
      <Description>{description}</Description>
      {image && <Image image={image} alt={title} />}
    </Card>
  )
}

export default AboutCard
