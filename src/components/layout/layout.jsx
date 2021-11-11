import React from "react"
import Header from "./header"
import GlobalStyle from "../../theme/GlobalStyles"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
