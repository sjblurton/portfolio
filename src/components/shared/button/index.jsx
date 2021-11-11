import { Link } from "gatsby"
import React from "react"
import { StyledButton } from "./styles"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function Button({
  link,
  hashtag,
  href,
  variant = "primary",
  children,
  ...rest
}) {
  if (link) {
    return (
      <Link to={link}>
        <StyledButton link={link} variant={variant} {...rest}>
          {children}
        </StyledButton>
      </Link>
    )
  } else if (hashtag) {
    return (
      <AnchorLink href={`#${hashtag}`}>
        <StyledButton variant={variant} {...rest}>
          {children}
        </StyledButton>
      </AnchorLink>
    )
  } else {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <StyledButton variant={variant} {...rest}>
          {children}
        </StyledButton>
      </a>
    )
  }
}
