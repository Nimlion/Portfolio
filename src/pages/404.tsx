import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Wrapper } from "../components/interests"
import { Exit } from "../components/header"
import { EasterEggFound } from "../components/header"

const NotFoundPage = () => {
  const [keyOne, setKeyOne] = useState(0)
  const [keyTwo, setKeyTwo] = useState(0)
  const [keyThree, setKeyThree] = useState(0)

  if (keyOne === 0 && keyTwo === 0 && keyThree === 0) {
    console.log("hint: up == down.")
  }

  const resetKeys = () => {
    setKeyOne(0)
    setKeyTwo(0)
    setKeyThree(0)
  }

  const increaseKeyOne = () => {
    keyOne < 360 ? setKeyOne(prevState => prevState + 20) : setKeyOne(0)
  }

  const increaseKeyTwo = () => {
    keyTwo < 360 ? setKeyTwo(prevState => prevState + 20) : setKeyTwo(0)
  }

  const increaseKeyThree = () => {
    keyThree < 360 ? setKeyThree(prevState => prevState + 20) : setKeyThree(0)
  }

  const checkCombo = () => {
    if (keyOne === 180 && keyTwo === 180 && keyThree === 180) {
      EasterEggFound()
      return true
    } else {
      return false
    }
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
          <Credits>
            <Wrapper>
              <span onClick={() => resetKeys()}>
                <Exit color={colors.white} />
              </span>
              <UnderTitle>Hello you pro discoverer!</UnderTitle>
              <UnderTitle>Hope you like puns ; )</UnderTitle>
              <Pun active={checkCombo()}>
                My dad farted in an elevator, it was wrong on so many levels
              </Pun>
              <Pun active={checkCombo()}>
                I tried to sue the airline for losing my luggage. I lost my case
              </Pun>
              <Pun active={checkCombo()}>
                There was a kidnapping at school yesterday. Don’t worry, though
                - he woke up
              </Pun>
              <Pun active={checkCombo()}>
                Two fish are in a tank, one says to the other "how do you drive
                this thing?"
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
  letter-spacing: 5px;
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

const Key = styled.span<{ grade: number }>`
  display: inline-block;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-right: 5px;
  opacity: 0.9;

  transform: ${props =>
    props.grade ? `rotate(${props.grade}deg)` : `rotate(0deg)`};

  :hover {
    opacity: 1;
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
  overflow: auto;
  top: 50%;
  transform: translate(0, -50%);
  animation: 0.5s ${GoBig} ease-in-out;
  width: 101%;
  height: 101%;
  transition: 0.5s;
`

const Pun = styled.p<{ active: boolean }>`
  ${textStyles.plainHeavy};
  color: ${colors.white};
  margin: 0;
  letter-spacing: 2px;
  padding: 30px 10px;
  border-bottom: 5px dashed;
  transition: 0.5s;
  transition-delay: 1s;

  :nth-of-type(1) {
    border-top: 5px dashed;
    margin-top: 30px;
  }

  ${props => (props.active ? `max-height: unset;` : `max-height: 0;`)}
`
