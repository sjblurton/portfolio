import React from "react"
import { Container, List, ListItem, Name } from "./styles/sidebar"
import AnchorLink from "react-anchor-link-smooth-scroll"

export function Sidebar({ setSidebarOpen, ...props }) {
  return (
    <Container onClick={() => setSidebarOpen(false)} {...props}>
      <Name>
        <AnchorLink href="#hero">Simon Blurton</AnchorLink>
      </Name>
      <List>
        <ListItem>
          <AnchorLink href="#work">
            <h2>Work</h2>
          </AnchorLink>
        </ListItem>
        <ListItem>
          <AnchorLink href="#about">
            <h2>About</h2>
          </AnchorLink>
        </ListItem>
        <ListItem>
          <AnchorLink href="#contact">
            <h2>Contact</h2>
          </AnchorLink>
        </ListItem>
      </List>
    </Container>
  )
}
