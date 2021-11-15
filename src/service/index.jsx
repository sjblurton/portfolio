import { useStaticQuery, graphql } from "gatsby"
import React, { createContext } from "react"

export const ImageContext = createContext()

export const ImageContextProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(
              placeholder: TRACED_SVG
              width: 350
              formats: [AUTO, WEBP, PNG]
            )
          }
        }
      }
    }
  `)

  return <ImageContext.Provider value={data}>{children}</ImageContext.Provider>
}
