import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components
import SEO from "../components/seo"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { Wrapper } from "../components/interests"
import { Paragraph } from "../components/textBlock"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
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
            route
            codeurl
            designurl
            domainurl
            technologies
          }
        }
      }
    }
  `)
  const route = window.location.search.replace("?", "")
  let currProject: any = null

  query.allPrismicProject.nodes.map((project: any) => {
    // tslint:disable-next-line: no-console
    console.log(project.data)

    if (project.data.route === route) {
      currProject = project.data
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      {currProject !== null ? (
        <>
          <Hero title={currProject.project_title[0].text} />
          <Wrapper>
            <Paragraph>{currProject.route}</Paragraph>
            <Paragraph>{currProject.route}</Paragraph>
          </Wrapper>
        </>
      ) : (
        <Hero title="No Project found" />
      )}
    </Layout>
  )
}

export default IndexPage
