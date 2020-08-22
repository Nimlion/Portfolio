import React, { useEffect } from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Jobs from "../components/jobs"
import Quotes from "../components/quote"
import Layout from "../components/layout"
import Skills from "../components/skills"
import Parallax from "../components/parallax"
import Interests from "../components/interests"
import TextBlock from "../components/textBlock"

const IndexPage = (prismicData: any) => {
  useEffect(() => {
    // tslint:disable-next-line: no-console
    console.log(
      "For certain you have to be lost to find something that cannot be found, else everyone would know where it is."
    )
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Parallax
        title={prismicData.data.prismicHomepage.data.title.text}
        imgURL={prismicData.data.prismicHomepage.data.hero_image.url}
      />
      <TextBlock {...prismicData.data.allPrismicBiography.nodes[0].data} />
      <Interests
        title={prismicData.data.allPrismicInterests.nodes[0].data.title[0].text}
        interests={prismicData.data.allPrismicInterests.nodes[0].data.interest}
      />
      <Quotes {...prismicData.data.allPrismicQuotes.nodes[0].data} />
      <Skills
        title={prismicData.data.allPrismicSkills.nodes[0].data.title[0].text}
        skills={prismicData.data.allPrismicSkills.nodes[0].data.body1}
      />
      <Jobs
        title={
          prismicData.data.allPrismicJobs.nodes[0].data.block_title[0].text
        }
        items={prismicData.data.allPrismicJobs.nodes[0].data.body[0].items}
      />
    </Layout>
  )
}

export default IndexPage

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
    allPrismicSkills {
      nodes {
        data {
          title {
            text
          }
          body1 {
            primary {
              category_name {
                text
              }
            }
            items {
              item
            }
          }
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
    allPrismicJobs {
      nodes {
        data {
          block_title {
            text
          }
          body {
            items {
              backdrop {
                url
              }
              company_name
              job_title
              logo {
                url
              }
              period_duration
            }
          }
        }
      }
    }
    allPrismicBiography {
      nodes {
        data {
          content {
            text
            spans {
              end
              start
              data {
                url
              }
            }
          }
          title {
            text
          }
        }
      }
    }
  }
`
