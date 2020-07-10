import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

interface IParallax {
  title?: string
  imgURL?: string
}

const ParallaxHero: React.FC<IParallax> = ({ imgURL, title }: IParallax) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // Changes the image position for a parallax effect
    const updateParallax = () => {
      setOffset(Math.round(window.pageYOffset))
    }
    window.addEventListener("scroll", updateParallax)
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("scroll", updateParallax)
    }
  })

  return (
    <Container>
      <ParallaxWrapper url={imgURL} scroll={offset} id="name"></ParallaxWrapper>
      {title && <Title scroll={offset}>{title}</Title>}
    </Container>
  )
}

export default ParallaxHero

interface IScroll {
  scroll: number
  url?: string
}

const Container = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${breakpoints.M}px) {
    height: 90vh;
  }
`
const ParallaxWrapper = styled.div<IScroll>`
  background-image: ${props =>
    props.url !== undefined && props.url !== null && props.url !== ""
      ? `url(${props.url});`
      : "url('ocean.jpg');"};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  ${props =>
    props.scroll !== null
      ? `transform: scale(${Math.round((1 + props.scroll / 1000) * 100) /
          100});`
      : "transform: none;"};
`

const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Title = styled.span<IScroll>`
  ${textStyles.title};
  position: absolute;
  top: 50%;
  left: 50%;
  ${props =>
    props.scroll !== null
      ? `transform: translate(-50%, -${props.scroll / 1.5 + 50}%);`
      : `transform: translate(-50%, -50%);`};
  color: ${colors.white};
  text-align: center;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px ${colors.background};

  &:after {
    content: "";
    width: 15px;
    position: absolute;
    height: 4px;
    display: block;
    background: ${colors.orange};
    margin-bottom: 4px;
    margin-left: 2px;
    right: -20px;
    bottom: 4px;
    -webkit-animation: ${blink} infinite 1s;
    animation: bcCCNc infinite 1s;
  }
`
