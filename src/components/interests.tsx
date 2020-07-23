import React, { useState } from "react"
import { Swipeable } from "react-swipeable"
import styled from "styled-components"

// Styling
import grid from "../styles/grid"
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

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
      setIndex(prevState => prevState - 1)
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

const Container = styled.header`
  background: ${colors.background};
  width: 100%;
`

const Wrapper = styled.div`
  ${grid}
  margin: 0 auto;
  padding: 100px 0;

  @media (min-width: ${breakpoints.S}) {
    padding: 150px 0;
  }
`

const Title = styled.h3`
  ${textStyles.title};
  color: ${colors.white};
  margin: 0 0 75px;
`

const Row = styled.div`
  position: relative;
  height: 400px;
  margin: 0 0 50px;
  overflow: hidden;

  @media (min-width: ${breakpoints.M}) {
    margin: 0 0 75px;
  }

  @media (min-width: ${breakpoints.L}) {
    height: 550px;
  }
`

const InterestDesc = styled.p`
  ${textStyles.title};
  color: ${colors.white};
  transform: translateY(250px);
  transition-timing-function: cubic-bezier(0, 1.17, 1, 1);
  margin: 0;
  padding: 0 50px;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.75);
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
    }
  }

  @media (min-width: ${breakpoints.L}) {
    height: 550px;
  }
`

const InterestLabel = styled.p`
  ${textStyles.titleLoud};
  color: ${colors.white};
  text-transform: uppercase;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.75);
  margin: 0 0 25px;
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
    margin-right: 25px;
  }

  :after {
    background-color: ${colors.white};
    border-radius: 25px;
    position: relative;
    content: "";
    display: block;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    transition: 0.5s;
  }

  :checked:after {
    background-color: ${colors.blue};
  }
`