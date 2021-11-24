import React from "react"
import {
  Email,
  Github,
  LinkedIn,
  WhatsApp,
  CVIcon,
} from "../../assets/icons/other"
import { Button, Circle, Grid } from "../shared"
import { ButtonContainer, Container, Section, Span } from "./styles"

const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <h1>
          I'm <Span>Simon Blurton</Span>
        </h1>
        <h2>Full Stack Web Developer...</h2>
        <ButtonContainer>
          <Button hashtag="work" variant="secondary">
            My Work
          </Button>
          <Button hashtag="contact" variant="primary">
            Hire me
          </Button>
        </ButtonContainer>
        <Grid style={{ gap: 0 }}>
          <Circle size="small" href="mailto:sblurton@hotmail.co.uk">
            <Email />
          </Circle>
          <Circle
            size="small"
            href="https://wa.me/5219671724985?text=Hello,+I+am+interested+in+knowing+more+about+your+programming+skills."
          >
            <WhatsApp />
          </Circle>
          <Circle size="small" href="https://github.com/sjblurton">
            <Github />
          </Circle>
          <Circle
            size="small"
            href="https://www.linkedin.com/in/simon-blurton-0b72554a/"
          >
            <LinkedIn />
          </Circle>
          <Circle size="small" href="/CV_Simon_Blurton_15-11-2021.pdf">
            <CVIcon />
          </Circle>
        </Grid>
      </Container>
    </Section>
  )
}

export default Hero
