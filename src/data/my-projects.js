import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const projectData = [
  {
    title: "Big 6 fitness app",
    id: "1884ce96-9e4b-5c67-bd61-f3c2315acfea",
    image: (
      <StaticImage
        src="../assets/work/big6.png"
        alt="big 6 portfolio mock up"
        placeholder="blurred"
        imgStyle={{
          width: "100%",
          borderRadius: "10px 10px 0px 0px",
        }}
      />
    ),
    description: "A full stack PWA fitness app, built in NEXT.JS using...",
    technologies: [
      "Styled Components",
      "Firebase Auth",
      "Firestore (Read, write, edit, and delete)",
      "multi-page form",
      "SVG deigns",
    ],
    code: "https://github.com/sjblurton/Big-6-Next-js",
    live: "https://big-6-next-js.vercel.app",
  },
  {
    title: "Vertgo Rock Climbing",
    id: "fb2ee4bb-f8a1-51c2-b19e-5a5977badd48",
    image: (
      <StaticImage
        src="../assets/work/vertigo.png"
        alt="Vertgo Rock Climbingportfolio mock up"
        placeholder="blurred"
        imgStyle={{
          width: "100%",
          borderRadius: "10px 10px 0px 0px",
        }}
      />
    ),
    description: "A website  with two languages, built in Gatsby using...",
    technologies: [
      "Styled Components",
      "Formik, and Yup",
      "SEO",
      "SVG animation",
    ],
    code: "https://github.com/sjblurton/vertigo-in-gatsby",
    live: "https://vertigo-gatsby.netlify.app/en/",
  },
  {
    title: "ECOEVuk website",
    id: "6b69c819-780e-517f-b198-0410877039a5",
    image: (
      <StaticImage
        src="../assets/work/ecoev.png"
        alt="ECOEVukportfolio mock up"
        placeholder="blurred"
        imgStyle={{
          width: "100%",
          borderRadius: "10px 10px 0px 0px",
        }}
      />
    ),
    description:
      "Electric car charging installation website built in Gatsby using...",
    technologies: [
      "Styled Components",
      "Formik, and Yup",
      "SEO",
      "SVG animation",
    ],
    code: "https://github.com/sjblurton/ecoevuk",
    live: "https://ecoevuk.netlify.app/",
  },
]
