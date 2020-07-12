import React, { useState } from "react"
import styled, { keyframes, css } from "styled-components"

// Components
import MenuSVG from "./icons/menu"
import LogoSVG from "./icons/logo"
import CloseSVG from "./icons/close"

// Styling
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState("")

  const toggleMenu = () => {
    menuOpen === "" || menuOpen === "closed"
      ? setMenuOpen("open")
      : setMenuOpen("closed")
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
`
