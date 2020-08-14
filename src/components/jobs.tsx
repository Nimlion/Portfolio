import React from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import { Container, Wrapper, Title } from "./interests"
import { IPrismicImage } from "src/typings/general"

// Typings

const Jobs: React.FC = () => (
  <Container>
    <Wrapper>
      <Title>Worked for</Title>
      <JobBlocks>
        <JobBlock>
          <Subtitle>Jungle Minds</Subtitle>
          <JobBox url="ocean.jpg">
            <Logo src="ocean.jpg" alt="logo of Jungle Minds" />
            <DescBox>
              <JobTitle>Software development intern</JobTitle>
              <Duration>03-2020 / 07-2020</Duration>
            </DescBox>
          </JobBox>
        </JobBlock>
      </JobBlocks>
    </Wrapper>
  </Container>
)

export default Jobs

const JobBlocks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const JobBlock = styled.div`
  width: 100%;

  :not(:nth-of-type(1)) {
    margin-top: 50px;
  }

  @media (min-width: ${breakpoints.M}) {
    width: calc(50% - 25px);

    :not(:nth-of-type(1)) {
      margin: 0;
    }

    :nth-of-type(even) {
      margin-left: 25px;
    }

    :nth-of-type(odd) {
      margin-right: 25px;
    }

    :nth-child(n + 3) {
      margin-top: 50px;
    }
  }

  @media (min-width: ${breakpoints.XL}) {
    width: calc(33.3% - 25px);

    :nth-of-type(3n + 1) {
      margin: 0 25px 0 0;
    }

    :nth-of-type(3n + 2) {
      width: calc(33.3% - 50px);
      margin: 0 25px;
    }

    :nth-of-type(3n + 3) {
      margin: 0 0 0 25px;
    }

    :nth-child(n + 4) {
      margin-top: 50px;
    }
  }
`

const Subtitle = styled.h5`
  ${textStyles.highlight};
  margin: 0 0 25px;
  color: ${colors.white};
`

const Logo = styled.img`
  margin: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  transform: translateX(-100%);
  transition: 0.5s;
`

const DescBox = styled.div`
  background: rgba(${colors.accentOne.rgba}, 0.5);
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px 15px;
  margin: 0;
  text-align: center;
  transition: 0.5s;
  transition-delay: 0.3s;
`

const JobTitle = styled.h6`
  ${textStyles.plainHeavy};
  color: ${colors.white};
  margin: 0 0 25px;
`

const Duration = styled.h6`
  ${textStyles.plainSubtle};
  color: ${colors.white};
  margin: 0;
`

const JobBox = styled.div<IPrismicImage>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  background-image: url(${props => (props.url ? `${props.url}` : ``)});
  background-size: cover;
  overflow: hidden;
  box-shadow: 12px 10px 3px ${colors.shadow};

  :hover {
    ${DescBox},
    ${Logo} {
      transform: translate(0);
    }
  }

  @media (min-width: ${breakpoints.S}) {
    height: 240px;
  }
`
