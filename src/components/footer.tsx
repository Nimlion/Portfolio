import React from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import grid from "../styles/grid"
import textStyles from "../styles/textStyles"

const Footer: React.FC = () => (
  <Container>
    <Wrapper>©{new Date().getFullYear()} Built by: Hosam Darwish</Wrapper>
  </Container>
)

export default Footer

const Container = styled.footer`
  width: 100%;
  background-color: ${colors.background};
  padding: 25px 0;
`

const Wrapper = styled.div`
  ${grid};
  ${textStyles.highlight};
  letter-spacing: 1px;
  color: ${colors.white};
  text-align: center;
`
