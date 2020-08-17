import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Wrapper } from "../components/interests"
// import { EasterEggFound } from "../components/header"

const NotFoundPage = () => {
  const [typed, setTyped] = useState("")
  const keyCombo = "hosam"

  const checkKey = (e: KeyboardEvent) => {
    setTyped(prevState => prevState + e.key)
  }

  // const checkKey = (e: KeyboardEvent) => {
  //   if (!keyComboFound) {
  //     LogEverything()

  //     const nextKey = keyCombo.substring(keyLogger.length, keyLogger.length + 1)
  //     console.log(nextKey, e.key)

  //     setterText(e.key)

  //     checkCombo()
  //   }
  //   LogEverything()
  // }

  // const setterText = (text: string) => {
  //   setKeyLogger(text)
  // }

  // const LogEverything = () => {
  //   console.log(keyLogger, keyLogger.length)
  // }

  // const checkCombo = () => {
  //   console.log("typed", typed)
  //   console.log("keyCombo", keyCombo)

  //   if (typed === keyCombo) {
  //     setKeyComboFound(true)
  //     EasterEggFound()
  //   }
  // }

  useEffect(() => {
    window.addEventListener("keydown", checkKey)

    return () => {
      window.removeEventListener("keydown", checkKey)
    }
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Wrapper>
        <Title>404 NOT FOUND</Title>
        <UnderTitle>
          You just hit a route that doesn&#39;t exist... the sadness.
        </UnderTitle>
        {typed.includes(keyCombo) && (
          <Credits>
            <Wrapper>
              <UnderTitle>Hello you pro discoverer!</UnderTitle>
              <UnderTitle>Hope you like puns ; )</UnderTitle>
              <Pun>
                My dad farted in an elevator, it was wrong on so many levels
              </Pun>
              <Pun>
                My dad farted in an elevator, it was wrong on so many levels
              </Pun>
              <Pun>
                My dad farted in an elevator, it was wrong on so many levels
              </Pun>
            </Wrapper>
          </Credits>
        )}
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage

const GoBig = keyframes`
  0% {
    width: 0%;
  border: 5px solid ${colors.accentThree.hex};
    height: 0%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h1`
  ${textStyles.titleLoud};
  color: ${colors.white};
  margin-top: 40%;
  text-shadow: 4px 4px ${colors.accentOne.hex},
    8px 8px ${colors.accentThree.hex};

  @media (min-width: ${breakpoints.S}) {
    margin-top: 15%;
    text-shadow: 6px 6px ${colors.accentOne.hex},
      12px 12px ${colors.accentThree.hex};
  }
`

const UnderTitle = styled.h3`
  ${textStyles.title};
  color: ${colors.white};
  text-shadow: 1px 1px ${colors.accentOne.hex},
    2px 2px ${colors.accentThree.hex};

  @media (min-width: ${breakpoints.S}) {
    text-shadow: 2px 2px ${colors.accentOne.hex},
      4px 4px ${colors.accentThree.hex};
  }
`
const Credits = styled.span`
  position: fixed;
  height: 5px;
  background: ${colors.background};
  left: 0;
  right: 0;
  z-index: 1;
  margin: auto;
  top: 50%;
  transform: translate(0, -50%);
  animation: 0.5s ${GoBig} ease-in-out;
  width: 101%;
  height: 101%;
  transition: 0.5s;
`

const Pun = styled.p`
  ${textStyles.plainHeavy};
  color: ${colors.white};
  letter-spacing: 2px;
  margin: 40px 0;
  padding: 20px 5px;
  border-top: 5px dashed;
  border-bottom: 5px dashed;
`
