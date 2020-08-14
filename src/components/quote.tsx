import React from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import { Container } from "./interests"

// Typings
import { IQuotes } from "../typings/general"

const Quotes: React.FC<IQuotes> = ({ quotes, backdrop }: IQuotes) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <Container>
      <Background url={backdrop ? backdrop.url : ""}>
        {quote.text && <Quote>{quote.text}</Quote>}
        {quote.author && <Author>{quote.author}</Author>}
      </Background>
    </Container>
  )
}

export default Quotes

const Background = styled.div<{ url: string }>`
  display: flex;
  flex-direction: column;
  padding: 75px 30px;
  background: ${props =>
    props.url ? `url(${props.url});` : `${colors.accentTwo.hex}`};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.M}) {
    padding: 150px 75px;
  }

  @media (min-width: ${breakpoints.XL}) {
    padding: 200px 20%;
  }
`

const Quote = styled.h3`
  ${textStyles.titleLoud};
  text-transform: uppercase;
  margin: 0;
  color: ${colors.white};
  text-shadow: 5px 5px 5px ${colors.shadow};
  text-align: center;
`

const Author = styled.h6`
  ${textStyles.title};
  font-weight: 100;
  margin: 25px 0 0 auto;
  color: ${colors.white};
  text-shadow: 5px 5px 5px ${colors.shadow};

  @media (min-width: ${breakpoints.M}) {
    margin: 45px 0 0 auto;
  }
`
