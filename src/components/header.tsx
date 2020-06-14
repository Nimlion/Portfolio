import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface IProps {
  siteTitle: string
}

const Header: React.FC<IProps> = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <Title>
        <HomeLink to="/">{siteTitle}</HomeLink>
      </Title>
    </Wrapper>
  </Container>
)

const Container = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

export const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export default Header
