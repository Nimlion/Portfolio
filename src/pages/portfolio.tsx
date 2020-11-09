import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Projects from "../components/projects"

const PortfolioPage = (prismicData: any) => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero title="Portfolio" />
    <Projects projects={prismicData.data.allPrismicProject.nodes} />
  </Layout>
)

export default PortfolioPage

export const query = graphql`
  {
    allPrismicProject {
      nodes {
        data {
          project_hero {
            alt
            url
          }
          project_title {
            text
          }
          carousell {
            image {
              url
            }
          }
          codeurl
          designurl
          domainurl
          technologies
        }
      }
    }
  }
`
