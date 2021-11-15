import React, { useEffect, useState } from "react"
import {
  Hero,
  WorkCard,
  AboutCard,
  WhiteSection,
  FormikForm,
  Input,
  Textarea,
} from "../components"
import { Seo, Layout } from "../components/layout"
import { Circle, Grid, Section, Title } from "../components/shared"
import JSONData from "../data/my-projects.json"
import JSONAboutData from "../data/about.json"
import { MySkills } from "../assets/icons/skills"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
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
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(data.allImageSharp.edges)
  }, [data])

  return (
    <Layout>
      <Seo title="Simon Blurton" />
      <Hero />
      <Section id="work">
        <Title light>My Projects</Title>
        <Grid>
          {images.length > 0 &&
            JSONData.map(data => {
              const image = images.filter(node => node.node.id === data.id)[0]
                .node.gatsbyImageData
              return (
                <WorkCard
                  image={image}
                  key={data.id}
                  id={data.id}
                  technologies={data.technologies}
                  description={data.description}
                  code={data.code}
                  live={data.live}
                  title={data.title}
                />
              )
            })}
        </Grid>
      </Section>
      <WhiteSection>
        <Title>My Skills</Title>
        <Grid style={{ gap: 0 }}>
          {MySkills.map((skill, i) => (
            <Circle key={i} size="large">
              {skill()}
            </Circle>
          ))}
        </Grid>
      </WhiteSection>
      <Section id="about">
        <Title light>About Me</Title>
        <Grid>
          {images.length > 0 &&
            JSONAboutData.map(hobby => {
              const image = images.filter(node => node.node.id === hobby.id)[0]
                .node.gatsbyImageData
              return (
                <AboutCard
                  image={image}
                  key={hobby.id}
                  id={hobby.id}
                  title={hobby.title}
                  description={hobby.description}
                />
              )
            })}
        </Grid>
      </Section>
      <WhiteSection id="contact">
        <Title>Contact Me</Title>
        <FormikForm>
          <Input name="name" type="text" label="Name" />
          <Input name="email" type="email" label="Email" />
          <Textarea name="message" label="Massage" />
        </FormikForm>
      </WhiteSection>
    </Layout>
  )
}

export default IndexPage
