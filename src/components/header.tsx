import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo src="logo.svg" alt="logo" />
      <Title>
        <HomeLink to="/">Home</HomeLink>
      </Title>
    </Wrapper>
  </Container>
)

const Container = styled.header`
  background: ${colors.blue};
  opacity: 0.8;
  width: 100%;
  position: fixed;
  transition: 0.5s;

  :hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  margin: 0 auto;
  padding: 15px;
`

const Title = styled.h1`
  ${textStyles.plainHeavy}
  margin: 0;
  margin-left: 20px;
`

const Logo = styled.img`
  height: auto;
  width: 150px;
  vertical-align: middle;
  margin: 0;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export default Header
