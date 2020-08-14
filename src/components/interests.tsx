import React, { useState } from "react"
import { Swipeable } from "react-swipeable"
import styled from "styled-components"

// Styling
import grid from "../styles/grid"
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import ArrowSVG from "./icons/arrow"

// Typings
import { IInterests, IInterest } from "../typings/general"

const Interests: React.FC<IInterests> = ({ title, interests }: IInterests) => {
  const [index, setIndex] = useState(0)

  const increaseIndex = () => {
    if (index + 1 < interests.length) {
      setIndex(prevState => prevState + 1)
    }
  }

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const interestState = (key: number) => {
    if (key === index) {
      return "active"
    } else if (key < index) {
      return "left"
    } else {
      return "right"
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Swipeable
          onSwipedLeft={() => increaseIndex()}
          onSwipedRight={() => decreaseIndex()}
        >
          <Row>
            {interests.map((interest: IInterest, key: number) => (
              <InterestBlock
                state={interestState(key)}
                key={key}
                image={interest.image.url}
              >
                <IconHolder active={key !== 0} onClick={() => decreaseIndex()}>
                  <ArrowIcon color={colors.white} />
                </IconHolder>
                <IconHolder
                  active={key < interests.length - 1}
                  onClick={() => increaseIndex()}
                >
                  <ArrowIcon color={colors.white} />
                </IconHolder>
                <InterestLabel>{interest.label}</InterestLabel>
                <InterestDesc>{interest.desc}</InterestDesc>
              </InterestBlock>
            ))}
          </Row>
        </Swipeable>
        <Bullets>
          {interests.map((element: IInterest, key: number) => {
            return (
              <Bullet
                type="radio"
                key={key}
                name="interest"
                element={element}
                onClick={() => setIndex(key)}
                checked={key === index ? true : false}
                readOnly
              />
            )
          })}
        </Bullets>
      </Wrapper>
    </Container>
  )
}

export default Interests

export const Container = styled.div`
  background: ${colors.background};
  width: 100%;
  margin: 100px auto;
`

export const Wrapper = styled.div`
  ${grid}

  @media (min-width: ${breakpoints.S}) {
    margin: 150px auto;
  }
`

export const Title = styled.h3`
  ${textStyles.title};
  color: ${colors.white};
  margin: 0 0 50px;

  ::selection {
    text-shadow: 4px 4px 1px ${colors.background};
  }

  @media (min-width: ${breakpoints.M}) {
    margin: 0 0 75px;
  }
`

const Row = styled.div`
  position: relative;
  height: 400px;
  margin: 0 0 30px;
  overflow: hidden;

  @media (min-width: ${breakpoints.M}) {
    margin: 0 0 50px;
    margin: 0 0 75px;
  }

  @media (min-width: ${breakpoints.L}) {
    height: 550px;
  }

  @media (min-width: ${breakpoints.XL}) {
    height: 750px;
  }
`

const IconHolder = styled.span<{ active: boolean }>`
  display: none;
  position: absolute;
  top: calc(50% - 40px);
  z-index: 1;
  cursor: pointer;
  transition: 0.5s;

  ${props => (props.active ? `` : `opacity: 0; cursor: default;`)};

  :nth-of-type(1) {
    left: 55px;
  }

  :nth-of-type(2) {
    right: 55px;
    transform: rotateY(180deg);
  }

  @media (min-width: ${breakpoints.M}) {
    display: block;
  }
`

const ArrowIcon = styled(ArrowSVG)`
  width: 48px;
  height: 80px;

  :hover {
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.75));
  }
`

const InterestDesc = styled.p`
  ${textStyles.title};
  color: ${colors.white};
  transform: translateY(250px);
  transition-timing-function: cubic-bezier(0, 1.17, 1, 1);
  margin: 0;
  margin-top: -55%;
  padding: 0 20px;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.75);

  @media (min-width: ${breakpoints.XS}) {
    margin-top: -10%;
  }

  @media (min-width: ${breakpoints.M}) {
    padding: 0px 140px;
  }
`

const InterestLabel = styled.p`
  ${textStyles.titleLoud};
  color: ${colors.white};
  text-transform: uppercase;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.75);
  margin: 0 0 20px;
  transition: 0.5s;

  @media (min-width: ${breakpoints.M}) {
    margin: 0 0 25px;
    padding: 0px 140px;
  }
`

const InterestBlock = styled.div<{ image: string; state: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  height: 400px;
  transition: 0.8s;

  ${props => (props.state === "active" ? `transform: translateX(0%);` : ``)}
  ${props => (props.state === "left" ? `transform: translateX(-150%);` : ``)}
  ${props => (props.state === "right" ? `transform: translateX(150%);` : ``)}

  ${props =>
    props.image
      ? `
    background-image: url(${props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;    
`
      : ``}

  :hover {
    ${InterestDesc} {
      transform: translateY(0%);
      opacity: 1;
      margin: 0;
    }
  }

  @media (min-width: ${breakpoints.L}) {
    height: 550px;
  }

  @media (min-width: ${breakpoints.XL}) {
    height: 750px;
  }
`

const Bullets = styled.div`
  display: flex;
  justify-content: center;
`

const Bullet = styled.input<{ element: IInterest }>`
  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;
  border-radius: 50%;
  transition: 0.5s;

  :not(:nth-last-of-type(1)) {
    margin-right: 20px;
  }

  :after {
    background-color: ${colors.white};
    border-radius: 50%;
    position: relative;
    content: "";
    display: block;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    transition: 0.5s;
  }

  :checked:after {
    background-color: ${colors.accentOne.hex};
  }

  @media (min-width: ${breakpoints.M}) {
    :not(:nth-last-of-type(1)) {
      margin-right: 25px;
    }

    :after {
      height: 30px;
      width: 30px;
    }
  }
`
