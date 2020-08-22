import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Roadmap from "../components/roadmap"

const EducationPage = (prismicData: any) => {
  return (
    <Layout>
      <SEO title="Education" />
      <Hero
        title={prismicData.data.allPrismicEducation.nodes[0].data.title[0].text}
      />
      <Roadmap
        education={prismicData.data.allPrismicEducation.nodes[0].data.education}
      />
    </Layout>
  )
}

export default EducationPage

export const query = graphql`
  {
    allPrismicEducation {
      nodes {
        data {
          title {
            text
          }
          education {
            label
            link
            paragraph
            image {
              alt
              url
            }
          }
        }
      }
    }
  }
`
