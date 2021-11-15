import React from "react"
import Header from "./header"
import GlobalStyle from "../../theme/GlobalStyles"
import Footer from "./footer"
import StyledComponentsThemeProvider from "../../theme/theme"

const Layout = ({ children }) => {
  return (
    <StyledComponentsThemeProvider>
      <GlobalStyle />
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </StyledComponentsThemeProvider>
  )
}

export default Layout
