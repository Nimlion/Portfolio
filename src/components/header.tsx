import React from "react"
import styled from "styled-components"

// Components
import MenuSVG from "./icons/menu"
import LogoSVG from "./icons/logo"

// Styling
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Header: React.FC = () => (
  <>
    <Container>
      <Wrapper>
        <Logo color={colors.background} />
        <Menu color={colors.background} />
      </Wrapper>
    </Container>
  </>
)

const Container = styled.header`
  background: ${colors.white};
  opacity: 0.8;
  width: 100%;
  position: fixed;
  transition: 0.5s;
  z-index: 5;
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
  padding: 15px;
`

const Logo = styled(LogoSVG)`
  height: 50px;
  width: 150px;
`

const Menu = styled(MenuSVG)`
  height: 25px;
  width: 25px;

  @media (min-width: ${breakpoints.S}px) {
    height: 35px;
    width: 35px;
  }
`

export default Header
