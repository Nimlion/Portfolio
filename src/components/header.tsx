import React, { useState, useRef, useEffect } from "react"
import styled, { keyframes, css } from "styled-components"
import { Link } from "gatsby"

// Components
import MenuSVG from "./icons/menu"
import LogoSVG from "./icons/logo"
import CloseSVG from "./icons/close"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

export const EasterEggFound = () => {
  // tslint:disable-next-line: no-console
  console.log("Congratulations you found an easter egg.")
}

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [menuOpen, setMenuOpen] = useState("")

  const toggleMenu = () => {
    menuOpen === "" || menuOpen === "closed"
      ? setMenuOpen("open")
      : setMenuOpen("closed")
  }

  const planeOneAudio = useRef<HTMLAudioElement>(null)
  const planeTwoAudio = useRef<HTMLAudioElement>(null)
  const planeThreeAudio = useRef<HTMLAudioElement>(null)

  const playAudio = (index: number) => {
    if (
      planeOneAudio !== null &&
      planeOneAudio.current !== null &&
      planeTwoAudio !== null &&
      planeTwoAudio.current !== null &&
      planeThreeAudio !== null &&
      planeThreeAudio.current !== null
    ) {
      switch (index) {
        case 0:
          planeOneAudio.current.play()
          planeTwoAudio.current.pause()
          planeTwoAudio.current.currentTime = 0
          planeThreeAudio.current.pause()
          planeThreeAudio.current.currentTime = 0

          break
        case 1:
          planeOneAudio.current.pause()
          planeOneAudio.current.currentTime = 0
          planeTwoAudio.current.play()
          planeThreeAudio.current.pause()
          planeThreeAudio.current.currentTime = 0
          break
        case 2:
          planeOneAudio.current.pause()
          planeOneAudio.current.currentTime = 0
          planeTwoAudio.current.pause()
          planeTwoAudio.current.currentTime = 0
          planeThreeAudio.current.play()
          break
      }
      EasterEggFound()
    }
  }

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrollingDown(e.target.documentElement.scrollTop > scrollTop)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <>
      <audio ref={planeOneAudio}>
        <source src="quack.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={planeTwoAudio}>
        <source src="bully.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={planeThreeAudio}>
        <source src="jeff.mp3" type="audio/mpeg" />
      </audio>
      <Container scrolling={scrollingDown}>
        <Wrapper>
          <Link to="/">
            <Logo color={colors.background} />
          </Link>
          <span onClick={toggleMenu}>
            <Menu color={colors.background} />
          </span>
        </Wrapper>
      </Container>
      <MenuContainer active={menuOpen}>
        <MenuRow>
          <Block>
            <PlaneContainer>
              <Plane onClick={() => playAudio(0)} />
              <Plane onClick={() => playAudio(1)} />
              <Plane onClick={() => playAudio(2)} />
            </PlaneContainer>
          </Block>
          <Block>
            <MenuLink to="/">- Home</MenuLink>
            <MenuLink to="/portfolio">- Portfolio</MenuLink>
            <MenuLink to="/work">- Work</MenuLink>
            <MenuLink to="/contact">- Contact</MenuLink>
          </Block>
        </MenuRow>

        <span onClick={toggleMenu}>
          <Exit color={colors.white} />
        </span>
      </MenuContainer>
    </>
  )
}

export default Header

interface IActive {
  active: string
}

const swipeIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`

const swipeOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`

const swipeDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`

const swipeUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const Container = styled.header<{ scrolling: boolean }>`
  ${props => (props.scrolling ? `top: -20%;` : `top: 0;`)}
  background: ${colors.white};
  width: 100%;
  position: fixed;
  transition: 0.5s;
  z-index: 1;
  box-shadow: 0 5px 10px ${colors.background};

  :hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${breakpoints.XL}) {
    padding: 5px 40px;
  }
`

const Logo = styled(LogoSVG)`
  height: 75px;
  width: 200px;

  @media (min-width: ${breakpoints.XL}) {
    height: 90px;
    width: 250px;
  }
`

const Menu = styled(MenuSVG)`
  cursor: pointer;
  height: 22px;
  width: 22px;

  @media (min-width: ${breakpoints.S}) {
    height: 28px;
    width: 28px;
  }

  @media (min-width: ${breakpoints.XL}) {
    height: 35px;
    width: 35px;
  }
`

const MenuContainer = styled.div<IActive>`
  z-index: 5;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: ${colors.background};
  width: 100%;
  height: 100%;
  transform: translateX(-100%);

  ${props =>
    props.active === "open"
      ? css`
          animation: ${swipeIn} cubic-bezier(0.5, 0, 0.5, 1.1) 1s;
          transform: translateX(0%);
        `
      : ``};

  ${props =>
    props.active === "closed"
      ? css`
          animation: ${swipeOut} linear 0.5s;
          transform: translateX(-100%);
        `
      : ``};

  @media (min-width: ${breakpoints.M}) {
    transform: translateY(-100%);
    ${props =>
      props.active === "open"
        ? css`
            animation: ${swipeDown} cubic-bezier(0.5, 0, 0.5, 1.1) 1s;
            transform: translateY(0%);
          `
        : ``};

    ${props =>
      props.active === "closed"
        ? css`
            animation: ${swipeUp} linear 0.5s;
            transform: translateY(-100%);
          `
        : ``};
  }
`

const Exit = styled(CloseSVG)`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  height: 15px;
  width: 15px;

  @media (min-width: ${breakpoints.S}) {
    height: 28px;
    width: 28px;
  }

  @media (min-width: ${breakpoints.XL}) {
    top: 50px;
    right: 50px;
    height: 45px;
    width: 45px;
  }
`

const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 0;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100%;
  width: 100%;

  :nth-of-type(1) {
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;

    @media (min-width: ${breakpoints.S}) {
      width: 40px;
    }

    @media (min-width: ${breakpoints.M}) {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.M}) {
    :nth-of-type(1) {
      position: unset;
      display: block;
    }
  }
`

const PlaneContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Plane = styled.div`
  position: unset;
  height: 20%;

  @media (min-width: ${breakpoints.M}) {
    position: absolute;
    width: 60%;
    height: 36%;
    transition: 0.3s;

    :hover {
      transform: rotate(3deg);
    }
  }

  :nth-of-type(1) {
    background-color: ${colors.accentOne.hex};
    opacity: 1;
    right: 50px;
    bottom: calc(32% - 50px);
    z-index: 3;
  }

  :nth-of-type(2) {
    background-color: ${colors.accentThree.hex};
    opacity: 0.75;
    right: 100px;
    bottom: 32%;
    z-index: 2;
  }

  :nth-of-type(3) {
    background-color: ${colors.accentTwo.hex};
    opacity: 0.5;
    right: 150px;
    bottom: calc(32% + 50px);
    z-index: 1;
  }
`

const MenuLink = styled(Link)`
  ${textStyles.title};
  color: ${colors.white};
  display: block;
  padding: 5px 0;
  text-decoration: none;
  transition: 0.5s;
  position: relative;
  overflow: hidden;

  :after,
  :before {
    content: "";
    position: absolute;
    transition: 0.5s;
    width: 100%;
    background: ${colors.white};
    height: 2px;
  }

  :before {
    top: 0;
    left: -150%;
  }

  :after {
    bottom: 0;
    right: -150%;
  }

  :hover {
    :before {
      top: 0;
      left: 0%;
    }

    :after {
      bottom: 0;
      right: 0%;
    }
  }
`
