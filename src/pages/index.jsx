import React from "react"
import Hero from "../components/hero"
import { Seo, Layout } from "../components/layout"
import { WorkCard } from "../components/project"
import { Circle, Grid, Section, Title } from "../components/shared"
import JSONData from "../data/my-projects.json"
import { MySkills } from "../assets/icons/skills"
import AboutCard from "../components/aboutCard"
import JSONAboutData from "../data/about.json"
import WhiteSection from "../components/skills"
import FormikForm from "../components/form"
import { Input } from "../components/form/input"
import { Textarea } from "../components/form/textarea"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Simon Blurton" />
      <Hero />
      <Section id="work">
        <Title light>My Projects</Title>
        <Grid>
          {JSONData.map(data => {
            return (
              <WorkCard
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
          {JSONAboutData.map(hobby => (
            <AboutCard
              key={hobby.id}
              id={hobby.id}
              title={hobby.title}
              description={hobby.description}
            />
          ))}
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
