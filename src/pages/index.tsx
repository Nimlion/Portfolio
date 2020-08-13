import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Quotes from "../components/quote"
import Layout from "../components/layout"
import Parallax from "../components/parallax"
import Interests from "../components/interests"

const IndexPage = (prismicData: any) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax
        title={prismicData.data.prismicHomepage.data.title.text}
        imgURL={prismicData.data.prismicHomepage.data.hero_image.url}
      />
      <Interests
        title={prismicData.data.allPrismicInterests.nodes[0].data.title[0].text}
        interests={prismicData.data.allPrismicInterests.nodes[0].data.interest}
      />
      <Quotes {...prismicData.data.allPrismicQuotes.nodes[0].data} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}

export const query = graphql`
  query {
    prismicHomepage {
      data {
        hero_image {
          alt
          url
        }
        title {
          text
        }
      }
    }
    allPrismicQuotes {
      nodes {
        data {
          backdrop {
            url
          }
          quotes {
            text
            author
          }
        }
      }
    }
    allPrismicInterests {
      nodes {
        data {
          title {
            text
          }
          interest {
            desc
            label
            image {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
