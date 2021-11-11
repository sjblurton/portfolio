import React, { useState } from "react"
import { Link } from "gatsby"
import { Burger, List, ListItem, Name, Nav } from "./styles/header"
import { Sidebar } from "./sidebar"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = ({ ...props }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <Nav {...props}>
      <Link to="/">
        <Name>Simon Blurton</Name>
      </Link>
      <List>
        <ListItem>
          <AnchorLink href="#work">Work</AnchorLink>
        </ListItem>
        <ListItem>
          <AnchorLink href="#about">About</AnchorLink>
        </ListItem>
        <ListItem>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </ListItem>
      </List>
      <Burger onClick={() => setSidebarOpen(true)} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </Nav>
  )
}

export default Header
