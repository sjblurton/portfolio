import React from "react"
import Header from "./header"
import GlobalStyle from "../../theme/GlobalStyles"
import Footer from "./footer"
import { ImageContextProvider } from "../../service"

const Layout = ({ children }) => {
  return (
    <ImageContextProvider>
      <GlobalStyle />
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </ImageContextProvider>
  )
}

export default Layout
