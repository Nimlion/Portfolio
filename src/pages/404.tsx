import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import CloseSVG from "../components/icons/close"
import { Wrapper } from "../components/interests"
import { EasterEggFound } from "../components/header"

const NotFoundPage = () => {
  const [keyOne, setKeyOne] = useState(0)
  const [keyTwo, setKeyTwo] = useState(0)
  const [keyThree, setKeyThree] = useState(0)

  const resetKeys = () => {
    setKeyOne(0)
    setKeyTwo(0)
    setKeyThree(0)
    document.getElementsByTagName("html")[0].style.overflow = "auto"
  }

  useEffect(() => {
    // tslint:disable-next-line: no-console
    console.log("hint: up == down.")

    return () => resetKeys()
  }, [])

  let data = useStaticQuery(graphql`
    {
      allPrismicPuns {
        nodes {
          data {
            title
            puns {
              pun
            }
          }
        }
      }
    }
  `)
  data = data.allPrismicPuns.nodes[0].data

  const increaseKeyOne = () => {
    keyOne < 360 ? setKeyOne(prevState => prevState + 15) : setKeyOne(0)
  }

  const increaseKeyTwo = () => {
    keyTwo < 360 ? setKeyTwo(prevState => prevState + 15) : setKeyTwo(0)
  }

  const increaseKeyThree = () => {
    keyThree < 360 ? setKeyThree(prevState => prevState + 15) : setKeyThree(0)
  }

  const checkCombo = () => {
    if (keyOne === 180 && keyTwo === 180 && keyThree === 180) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      EasterEggFound()
      return true
    }
    return false
  }

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Wrapper>
        <Title>
          <Key onClick={() => increaseKeyOne()} grade={keyOne}>
            4
          </Key>
          <Key onClick={() => increaseKeyTwo()} grade={keyTwo}>
            0
          </Key>
          <Key onClick={() => increaseKeyThree()} grade={keyThree}>
            4
          </Key>{" "}
          NOT FOUND
        </Title>

        <UnderTitle>
          You just hit a route that doesn&#39;t exist... the sadness.
        </UnderTitle>

        {checkCombo() && (
          <HiddenScroll>
            <Papyrus>
              <IconHolder onClick={() => resetKeys()}>
                <CloseBtn color={colors.white} />
              </IconHolder>
              <UnderTitle>{data.title}</UnderTitle>
              {data.puns.map((pun: any, key: number) => (
                <Pun key={key}>{pun.pun}</Pun>
              ))}
            </Papyrus>
          </HiddenScroll>
        )}
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage

const GoBig = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`

const Title = styled.h1`
  ${textStyles.titleLoud};
  color: ${colors.white};
  margin-top: 40%;
  letter-spacing: 5px;
  text-shadow: 4px 4px ${colors.accentOne.hex}, 8px 8px ${colors.accentTwo.hex};

  @media (min-width: ${breakpoints.M}) {
    margin-top: 15%;
    text-shadow: 6px 6px ${colors.accentOne.hex},
      12px 12px ${colors.accentTwo.hex};
  }
`

const UnderTitle = styled.h3`
  ${textStyles.title};
  color: ${colors.white};
  text-shadow: 1px 1px ${colors.accentOne.hex}, 2px 2px ${colors.accentTwo.hex};

  @media (min-width: ${breakpoints.S}) {
    text-shadow: 2px 2px ${colors.accentOne.hex},
      4px 4px ${colors.accentTwo.hex};
  }
`

const Key = styled.span<{ grade: number }>`
  display: inline-block;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-right: 5px;
  ${props => (props.grade === 180 ? `opacity: 1;` : `opacity: 0.85`)};

  transform: ${props =>
    props.grade ? `rotate(${props.grade}deg)` : `rotate(0deg)`};

  :hover {
    opacity: 1;
  }
`

const HiddenScroll = styled.span`
  position: fixed;
  display: flex;
  height: 5px;
  background: ${colors.background};
  left: 0;
  right: 0;
  z-index: 1;
  margin: auto;
  overflow: auto;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  animation: 0.5s ${GoBig} ease-in-out;

  ::-webkit-scrollbar-track {
    background-color: ${colors.white};
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-image: -webkit-linear-gradient(
      top,
      ${colors.accentTwo.hex} 0%,
      ${colors.white} 50%,
      ${colors.accentOne.hex} 100%
    );
  }
`

const Papyrus = styled(Wrapper as any)`
  margin: auto;
  padding: 0 40px 50px;

  @media (min-width: ${breakpoints.XS}) {
    padding: 0 20px 50px;
  }

  @media (min-width: ${breakpoints.S}) {
    padding: 0 0 50px;
  }
`

const IconHolder = styled.span`
  display: flex;
  position: sticky;
  top: 0;
`

const CloseBtn = styled(CloseSVG)`
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-left: auto;
  margin-right: -35px;
  margin-top: 25px;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: ${breakpoints.S}) {
    height: 28px;
    width: 28px;
    margin-top: 25px;
    margin-right: -50px;
  }

  @media (min-width: ${breakpoints.XL}) {
    height: 45px;
    width: 45px;
  }
`

const Pun = styled.p`
  ${textStyles.plainHeavy};
  color: ${colors.white};
  margin: 0;
  letter-spacing: 2px;
  padding: 30px 10px;
  border-bottom: 5px dashed;
  transition: 0.5s;

  :nth-of-type(1) {
    border-top: 5px dashed;
    margin-top: 30px;
  }
`
