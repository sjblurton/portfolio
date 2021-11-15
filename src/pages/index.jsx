import React from "react"
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
import { aboutData } from "../data/about.js"
import { projectData } from "../data/my-projects.js"
import { MySkills } from "../assets/icons/skills"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Simon Blurton" />
      <Hero />
      <Section id="work">
        <Title light>My Projects</Title>
        <Grid>
          {projectData.map(data => {
            return (
              <WorkCard
                image={data.image}
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
          {aboutData.map(hobby => {
            return (
              <AboutCard
                image={hobby.image}
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
