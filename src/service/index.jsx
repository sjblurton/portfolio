import { useStaticQuery, graphql } from "gatsby"

export const ImagesData = () => {
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
  return data
}
