import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import Parallax from "../components/parallax"
import SEO from "../components/seo"

export let CMSData: string[] = []

const IndexPage = (prismicData: any) => {
  prismicData.data.allPrismicMenuSounds.nodes[0].data.sounds.map(
    (soundEffect: any) => {
      CMSData.push(soundEffect.menu_sound.url)
    }
  )

  return (
    <Layout>
      <SEO title="Home" />
      <Parallax
        title={prismicData.data.prismicHomepage.data.title.text}
        imgURL={prismicData.data.prismicHomepage.data.hero_image.url}
      />
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
    allPrismicMenuSounds {
      nodes {
        data {
          sounds {
            menu_sound {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
