import React from "react"
import { ThemeProvider } from "styled-components"

const StyledComponentsThemeProvider = ({ children }) => {
  const colors = {
    primary: "#56316D",
    primaryOpacity: "#56316D99",
    primaryMaxOpacity: "#56316D33",
    white: "#fff",
    dark: "#0E0E2C",
    grey: "#666",
    lightGrey: "#b7b7b7",
    header: "#7B5392",
    accent: "#ECF1F4",
    light: "#FAFCFE",
    error: "#d8000c",
    errorOpacity: "#ffd2d2",
  }
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>
}

export default StyledComponentsThemeProvider
