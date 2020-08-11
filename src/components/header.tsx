import React, { useState } from "react"
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState("")

  const toggleMenu = () => {
    menuOpen === "" || menuOpen === "closed"
      ? setMenuOpen("open")
      : setMenuOpen("closed")
  }

  const planeOneAudio = new Audio("quack.mp3")
  const planeTwoAudio = new Audio("jeff.mp3")
  const planeThreeAudio = new Audio("bully.mp3")

  const playAudio = (index: number) => {
    if (
      planeOneAudio !== null &&
      planeTwoAudio !== null &&
      planeThreeAudio !== null
    ) {
      switch (index) {
        case 0:
          planeOneAudio.play()
          planeTwoAudio.pause()
          planeTwoAudio.currentTime = 0
          planeThreeAudio.pause()
          planeThreeAudio.currentTime = 0

          break
        case 1:
          planeOneAudio.pause()
          planeOneAudio.currentTime = 0
          planeTwoAudio.play()
          planeThreeAudio.pause()
          planeThreeAudio.currentTime = 0
          break
        case 2:
          planeOneAudio.pause()
          planeOneAudio.currentTime = 0
          planeTwoAudio.pause()
          planeTwoAudio.currentTime = 0
          planeThreeAudio.play()
          break
      }
      // tslint:disable-next-line: no-console
      console.log("Congratulations you found an easter egg.")
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Logo color={colors.background} />
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

const Container = styled.header`
  background: ${colors.white};
  opacity: 0.8;
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
  padding: 10px 20px;
`

const Logo = styled(LogoSVG)`
  height: 50px;
  width: 150px;
`

const Menu = styled(MenuSVG)`
  cursor: pointer;
  height: 15px;
  width: 15px;

  @media (min-width: ${breakpoints.S}px) {
    height: 28px;
    width: 28px;
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

  @media (min-width: ${breakpoints.M}px) {
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

  @media (min-width: ${breakpoints.S}px) {
    height: 28px;
    width: 28px;
  }

  @media (min-width: ${breakpoints.XL}px) {
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

    @media (min-width: ${breakpoints.S}px) {
      width: 40px;
    }

    @media (min-width: ${breakpoints.M}px) {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.M}px) {
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

  @media (min-width: ${breakpoints.M}px) {
    position: absolute;
    width: 60%;
    height: 36%;
  }

  :nth-of-type(1) {
    background-color: ${colors.blue};
    opacity: 1;
    right: 50px;
    bottom: calc(32% - 50px);
    z-index: 3;
  }

  :nth-of-type(2) {
    background-color: ${colors.orange};
    opacity: 0.75;
    right: 100px;
    bottom: 32%;
    z-index: 2;
  }

  :nth-of-type(3) {
    background-color: ${colors.green};
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
