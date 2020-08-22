import React, { useState, useLayoutEffect, useRef, useEffect } from "react"
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
  const [currentTitle, setCurrentTitle] = useState(title)
  const titleRef = useRef<HTMLSpanElement>(null)

  let isMounted = true

  const sleep = (ms: number) =>
    new Promise(resolve => {
      if (isMounted === true) {
        setTimeout(resolve, ms)
      }
    })

  const typingContainer = titleRef.current

  const keepWriting = async () => {
    while (typingContainer !== null && isMounted === true) {
      await write(typingContainer.innerHTML).catch(error => {
        return error
      })
      await sleep(1000).catch(error => {
        return error
      })
    }
    return
  }

  const write = async (text: string) => {
    if (
      isMounted === true &&
      typingContainer !== undefined &&
      typingContainer !== null &&
      currentTitle !== undefined &&
      currentTitle !== null
    ) {
      let index = 0
      while (
        typingContainer !== null &&
        isMounted === true &&
        index < text.length
      ) {
        await sleep(500).catch(error => {
          return error
        })
        index++
        if (isMounted === true) {
          setCurrentTitle(currentTitle.substring(0, index))
        }
      }
    }
  }

  useEffect(() => {
    keepWriting()

    return () => {
      isMounted = false
    }
  }, [typingContainer])

  useLayoutEffect(() => {
    // Changes the image position for a parallax effect
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
      <ParallaxWrapper url={imgURL} scroll={offset} />
      {title && (
        <Title ref={titleRef} scroll={offset}>
          {currentTitle}
        </Title>
      )}
    </Container>
  )
}

export default ParallaxHero

interface IScroll {
  scroll: number
  url?: string
}

const blink = keyframes`
  from{border-right-color: ${colors.accentTwo.hex};}
  to{border-right-color: transparent;}
`

const Container = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${breakpoints.M}) {
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
  width: max-content;
  padding-right: 2px;
  border-right: 3px solid;
  animation: ${blink} infinite 1s;
`
