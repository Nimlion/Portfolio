import React, { useEffect, useState } from "react"
import { Swipeable } from "react-swipeable"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

// Components
import SEO from "../components/seo"
import Hero from "../components/hero"
import colors from "../styles/colors"
import Layout from "../components/layout"
import breakpoints from "../styles/breakpoints"
import { Paragraph } from "../components/textBlock"
import { ArrowIcon, IconHolder, Wrapper } from "../components/interests"

const IndexPage = () => {
  const [index, setIndex] = useState(0)

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
            codeurl
            designurl
            domainurl
            technologies
            route
            carousell {
              image {
                url
              }
            }
            top_text
            bottom_text
          }
        }
      }
    }
  `)
  const route =
    typeof window !== "undefined" ? window.location.search.replace("?", "") : ""
  let currProject: any = null

  query.allPrismicProject.nodes.map((project: any) => {
    if (project.data.route === route) {
      currProject = project.data
    }
  })

  useEffect(() => {
    query.allPrismicProject.nodes.map((project: any) => {
      if (project.data.route === route) {
        currProject = project.data
      }
    })
  }, [])

  const increaseIndex = () => {
    if (index + 1 < currProject.carousell.length) {
      setIndex(prevState => prevState + 1)
    }
  }

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }
  return (
    <Layout>
      <SEO title="Home" />
      {currProject !== null ? (
        <>
          <Hero title={currProject.project_title[0].text} />
          <Wrapper>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: currProject.top_text }}
            />
            {currProject.carousell.length >= 1 && (
              <Carrousel>
                <Holder active={index !== 0} onClick={() => decreaseIndex()}>
                  <Arrow color={colors.white} />
                </Holder>
                <Swipeable
                  onSwipedLeft={() => increaseIndex()}
                  onSwipedRight={() => decreaseIndex()}
                >
                  {currProject.carousell.map((image: any, key: number) => (
                    <Image
                      key={key}
                      active={key === index}
                      src={image.image.url}
                    />
                  ))}
                </Swipeable>
                <Holder
                  active={index !== currProject.carousell.length - 1}
                  onClick={() => increaseIndex()}
                >
                  <Arrow color={colors.white} />
                </Holder>
              </Carrousel>
            )}
            <Paragraph
              dangerouslySetInnerHTML={{ __html: currProject.bottom_text }}
            />
          </Wrapper>
        </>
      ) : (
        <Hero title="No Project found" />
      )}
    </Layout>
  )
}

export default IndexPage

const Carrousel = styled.div`
  position: relative;
  height: 30vh;
  margin: 25px 0;
  overflow: hidden;

  @media (min-width: ${breakpoints.S}) {
    height: 40vh;
  }

  @media (min-width: ${breakpoints.M}) {
    height: 60vh;
    margin: 50px 0;
  }

  @media (min-width: ${breakpoints.XXL}) {
    height: 30vh;
  }
`

const Image = styled.img<{ active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  margin: 0;
  max-height: 100%;
  max-width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  transition: 0.3s;

  ${props =>
    props.active
      ? `opacity: 1; transition-delay: 0.3s;`
      : `opacity: 1; transform: translate(-50%, -100vh);`};

  @media (min-width: ${breakpoints.S}) {
    max-width: calc(100% - 90px);
  }

  @media (min-width: ${breakpoints.M}) {
    max-width: calc(100% - 150px);
  }
`

const Holder = styled(IconHolder as any)`
  display: block;
  top: calc(50% - 20px);
  :nth-of-type(1) {
    left: 0px;
  }

  :nth-of-type(2) {
    right: 0px;
  }

  @media (min-width: ${breakpoints.S}) {
    top: calc(50% - 30px);
  }

  @media (min-width: ${breakpoints.M}) {
    top: calc(50% - 40px);
  }
`

const Arrow = styled(ArrowIcon as any)`
  width: 24px;
  height: 40px;

  @media (min-width: ${breakpoints.S}) {
    width: 36px;
    height: 60px;
  }

  @media (min-width: ${breakpoints.M}) {
    width: 48px;
    height: 80px;
  }
`
