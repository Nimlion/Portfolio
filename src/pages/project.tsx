import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"
import { Swipeable } from "react-swipeable"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import { fontWeights } from "../styles/fonts"
import breakpoints from "../styles/breakpoints"

// Components
import { CloseBtn } from "./404"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Layout from "../components/layout"
import CodeSVG from "../components/icons/code"
import SiteSVG from "../components/icons/site"
import PHPSVG from "../components/icons/tech/php"
import DesignSVG from "../components/icons/design"
import { Paragraph } from "../components/textBlock"
import JavaSVG from "../components/icons/tech/java"
import ReactSVG from "../components/icons/tech/react"
import PythonSVG from "../components/icons/tech/python"
import LaravelSVG from "../components/icons/tech/laravel"
import AngularSVG from "../components/icons/tech/angular"
import FlutterSVG from "../components/icons/tech/flutter"
import { ArrowIcon, IconHolder, Title, Wrapper } from "../components/interests"

// Methods
import { checkTech } from "../components/projects"

const IndexPage = () => {
  const [index, setIndex] = useState(0)
  const [modelActive, setModelActive] = useState(false)

  const ToggleModal = (state: boolean) => {
    modelActive
      ? (document.getElementsByTagName("html")[0].style.overflow = "auto")
      : (document.getElementsByTagName("html")[0].style.overflow = "hidden")
    setModelActive(state)
  }

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
            <Technologies>
              <SubTitle>Technologies used</SubTitle>
              {checkTech("java", currProject.technologies) && (
                <TechBar>
                  <JavaSVG color={colors.white} />
                  <Tech>Java</Tech>
                </TechBar>
              )}
              {checkTech("react", currProject.technologies) && (
                <TechBar>
                  <ReactSVG color={colors.white} />
                  <Tech>React</Tech>
                </TechBar>
              )}
              {checkTech("angular", currProject.technologies) && (
                <TechBar>
                  <AngularSVG color={colors.white} />
                  <Tech>Angular</Tech>
                </TechBar>
              )}
              {checkTech("flutter", currProject.technologies) && (
                <TechBar>
                  <FlutterSVG color={colors.white} />
                  <Tech>Flutter</Tech>
                </TechBar>
              )}
              {checkTech("php", currProject.technologies) && (
                <TechBar>
                  <PHPSVG color={colors.white} />
                  <Tech>PHP</Tech>
                </TechBar>
              )}
              {checkTech("laravel", currProject.technologies) && (
                <TechBar>
                  <LaravelSVG color={colors.white} />
                  <Tech>Laravel</Tech>
                </TechBar>
              )}
              {checkTech("python", currProject.technologies) && (
                <TechBar>
                  <PythonSVG color={colors.white} />
                  <Tech>Python</Tech>
                </TechBar>
              )}
            </Technologies>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: currProject.top_text }}
            />
            {currProject.carousell.length >= 1 && (
              <>
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
                        onClick={() => ToggleModal(true)}
                        key={key}
                        active={key === index}
                        src={image.image.url}
                        alt={image.image.alt}
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
                <Modal active={modelActive}>
                  <ModalBackground onClick={() => ToggleModal(false)} />
                  <Holder active={index !== 0} onClick={() => decreaseIndex()}>
                    <Arrow color={colors.white} />
                  </Holder>
                  <Swipeable
                    onSwipedLeft={() => increaseIndex()}
                    onSwipedRight={() => decreaseIndex()}
                  >
                    <ModalImage
                      src={currProject.carousell[index].image.url}
                      alt={currProject.carousell[index].image.alt}
                    />
                  </Swipeable>
                  <Holder
                    active={index !== currProject.carousell.length - 1}
                    onClick={() => increaseIndex()}
                  >
                    <Arrow color={colors.white} />
                  </Holder>
                  <CloseHolder onClick={() => ToggleModal(false)}>
                    <CloseBtn color={colors.white} />
                  </CloseHolder>
                </Modal>
              </>
            )}
            <Paragraph
              dangerouslySetInnerHTML={{ __html: currProject.bottom_text }}
            />
            <ButtonBar>
              {currProject.domainurl && (
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={currProject.domainurl}
                >
                  Look at the project live
                  <SiteSVG color={colors.white} />
                </Button>
              )}
              {currProject.designurl && (
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={currProject.designurl}
                >
                  Take a look at the design
                  <DesignSVG color={colors.white} />
                </Button>
              )}
              {currProject.codeurl && (
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={currProject.codeurl}
                >
                  Show me the code <CodeSVG color={colors.white} />
                </Button>
              )}
            </ButtonBar>
          </Wrapper>
        </>
      ) : (
        <Hero title="No Project found" />
      )}
    </Layout>
  )
}

export default IndexPage

const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 50px auto;
  width: 100%;

  @media (min-width: ${breakpoints.M}) {
    margin: 100px auto;
    width: 50%;
  }
`

const SubTitle = styled(Title as any)`
  ${textStyles.highlight};
  width: 100%;
  text-align: center;
  display: block;

  @media (min-width: ${breakpoints.XXS}) {
    margin: 0 0 50px;
  }
`

const TechBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 175px;
  margin: 0 auto;

  svg {
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
`

const Tech = styled.div`
  ${textStyles.plainHeavy};
  color: ${colors.white};
  margin: auto 0 auto 25px;
`

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

const Modal = styled.div<{ active: boolean }>`
  position: fixed;
  transition: 0.5s;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${props =>
    props.active
      ? `width: 101%; height: 100vh; opacity: 1;`
      : css`
          height: 0;
          opacity: 0;
          * {
            width: 0;
          }
        `};

  & ${Holder} {
    :nth-of-type(1) {
      left: 25px;
    }

    :nth-of-type(2) {
      right: 25px;
    }
  }

  @media (min-width: ${breakpoints.XXXL}) {
    & ${Holder} {
      :nth-of-type(1) {
        left: 75px;
      }

      :nth-of-type(2) {
        right: 75px;
      }
    }
  }
`

const ModalBackground = styled.div`
  background: ${colors.background};
  display: block;
  height: 101%;
  width: 101%;
  margin: -1px;
`

const CloseHolder = styled.span`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 5;
  margin: 0;

  svg {
    margin: 0;
  }

  @media (min-width: ${breakpoints.XXXL}) {
    top: 75px;
    right: 75px;
  }
`

const ModalImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 90vh;
  width: auto;
  padding: 0 3vh;
  margin: 0;
  transform: translate(-50%, -50%);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media (min-width: ${breakpoints.M}) {
    padding: 0 15vh;
  }

  @media (min-width: ${breakpoints.L}) {
    padding: 0 0;
  }
`

const Button = styled.a`
  ${textStyles.plainSubtle};
  font-weight: ${fontWeights.semiBold};
  padding: 10px 15px;
  text-decoration: none;
  color: ${colors.white};
  background: ${colors.accentOne.hex};
  border: 3px solid ${colors.accentTwo.hex};
  margin: 0 auto;
  transition: 0.3s;

  :not(:first-of-type) {
    margin: 25px auto 0;
  }

  svg {
    margin-left: 15px;
    vertical-align: middle;
    height: 25px;
    width: 25px;
  }

  :hover {
    svg {
      transform: rotate(10deg) scale(1.1);
    }
  }

  @media (min-width: ${breakpoints.M}) {
    :not(:first-of-type),
    :first-of-type {
      margin: 0;
    }

    svg {
      margin-left: 25px;
      height: 35px;
      width: 35px;
    }
  }
`

const ButtonBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px 0;

  @media (min-width: ${breakpoints.M}) {
    flex-direction: row;
  }

  :hover ${Button} {
    :not(:hover) {
      border-color: ${colors.accentOne.hex};
    }
  }
`
