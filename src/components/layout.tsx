import React from "react"

// Styling
import CSSReset from "../styles/reset"

// Components
import Footer from "./footer"
import Header from "./header"

const Layout: React.FC = ({ children }) => (
  <>
    <CSSReset />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
