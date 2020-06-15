import React from "react"

// Components
import Layout from "../components/layout"
import Parallax from "../components/parallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Parallax />
  </Layout>
)

export default IndexPage
