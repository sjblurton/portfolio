import React from "react"
import { Skill } from "./styles"

const Circle = ({ children, href, ...restProps }) => {
  return (
    <Skill href={href} target="_blank" {...restProps}>
      {children}
    </Skill>
  )
}

export default Circle
