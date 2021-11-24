import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const aboutData = [
  {
    title: "Software Developer",
    image: (
      <StaticImage
        src="../assets/about/program.png"
        alt="programing screen"
        placeholder="blurred"
        style={{ alignSelf: "end" }}
      />
    ),

    description:
      "I love the idea of if there’s a problem, and we don’t need to change the laws of physics to solve it. It’s only a problem of engineering... Software engineers can change the world.",
    id: "3edb9dca-2944-5d96-ac71-ca0734c83986",
  },
  {
    title: "Rock Climber",
    image: (
      <StaticImage
        style={{ alignSelf: "end" }}
        src="../assets/about/climber.png"
        alt="rock climber"
        placeholder="blurred"
      />
    ),
    description:
      "Do something that scares you everyday. A sport thats equally, and if not more to do with problem solving, than is to do with strength.",
    id: "d9de1aed-8647-55c2-a4d5-8ad2df544b72",
  },
  {
    title: "Mountain Biker",
    image: (
      <StaticImage
        src="../assets/about/bike.png"
        alt="Mountain Biker"
        placeholder="blurred"
        style={{ alignSelf: "end" }}
      />
    ),
    description:
      "Hobbies, are important to challenge ourselves, and help us become better. Mountain biking is a form of meditation to me.",
    id: "6faca857-bacc-51be-941e-1008c4276e4c",
  },
  {
    title: "Sea Shepherd Volunteer",
    image: (
      <StaticImage
        src="../assets/about/Sea-Shepherd.png"
        alt="Sea Shepherd logo"
        placeholder="blurred"
        style={{ alignSelf: "center", marginBottom: "16px" }}
      />
    ),
    description:
      "I have been volunteering for Sea Shepherd, as a vegan chef, or as a Deckhand. I'm very proud of doing my part to reduce the amount of illegal poaching of the sea.",
    id: "b6a6dbc9-b1e4-5dd0-a1f3-6e83161b76c2s",
  },
]
