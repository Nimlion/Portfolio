import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

interface IHero {
  title: string
}

const Hero: React.FC<IHero> = ({ title }: IHero) => {
  const [offset, setOffset] = useState(0)

  useLayoutEffect(() => {
    // Changes the title position for a parallax effect
    const updateParallax = () => {
      setOffset(Math.round(window.pageYOffset))
    }

    window.addEventListener("scroll", updateParallax)
    return () => {
      window.removeEventListener("scroll", updateParallax)
    }
  })

  return (
    <Container>
      <ParallaxWrapper />
      {title && <Title scroll={offset}>{title}</Title>}
    </Container>
  )
}

export default Hero

interface IScroll {
  scroll: number
}

const Container = styled.div`
  height: 60vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${breakpoints.M}) {
    height: 80vh;
  }
`

const ParallaxWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${colors.accentTwo.hex};
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  :before {
    background: ${colors.accentOne.hex};
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% calc(100% - 20px));
  }

  :after {
    background: ${colors.shadow};
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0% calc(100% - 40px));
  }
`

const Title = styled.span<IScroll>`
  ${textStyles.title};
  position: absolute;
  top: 50%;
  left: 50%;
  ${props =>
    props.scroll !== null
      ? `transform: translate(-50%, -${props.scroll / 1.1 + 50}%);`
      : `transform: translate(-50%, -50%);`};
  color: ${colors.white};
  text-align: center;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px ${colors.background};
  width: max-content;
  padding-right: 2px;
`
