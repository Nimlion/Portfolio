import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"

// Styling
import grid from "../styles/grid"
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import { Title } from "./interests"

// Functions
import { EasterEggFound } from "./header"

const Footer: React.FC = () => {
  let data = useStaticQuery(graphql`
    {
      allPrismicFooter {
        nodes {
          data {
            email
            phonenumber
            social_media {
              link
              logo {
                url
              }
            }
            title {
              text
            }
            image {
              url
            }
          }
        }
      }
    }
  `)
  data = data.allPrismicFooter.nodes[0].data

  return (
    <Container>
      <Wrapper>
        <Title>{data.title[0].text}</Title>
        <InfoBlock>
          <InfoContainer>
            <ContactIllustration
              src={data.image.url}
              alt="contact illustration"
            />
          </InfoContainer>
          <InfoDetails>
            <ExternalLink href={`tel:${data.phonenumber}`}>
              {data.phonenumber}
            </ExternalLink>
            <ExternalLink
              href={`mailto:${data.email}?subject=We would like to contact you&body=Dear Hosam,`}
            >
              {data.email}
            </ExternalLink>
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Amsterdam/@52.3545828,4.7638781,11z/data=!3m1!4b1!4m5!3m4!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d!8m2!3d52.3666969!4d4.8945398"
            >
              Amsterdam, The Netherlands
            </ExternalLink>
          </InfoDetails>
        </InfoBlock>
        <SocialsBlock>
          {data.social_media.map((social: any, key: number) => (
            <IconContainer
              key={key}
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialMediaIcon
                src={social.logo.url}
                alt="socialmedia icon"
                color={colors.white}
              />
            </IconContainer>
          ))}
        </SocialsBlock>
        <Copy>
          © {new Date().getFullYear()} Built & Designed by: Hosam Darwish
        </Copy>
      </Wrapper>
      <BottomStroke onMouseEnter={() => EasterEggFound()} />
    </Container>
  )
}

export default Footer
const rainbow = keyframes`
  0% {
    background-color: #00ABEC;
  }
  10% {
    background-color: #2b1de8;
  }
  20% {
    background-color: #dd00f3;
  }
  30% {
    background-color: #ff2400;
  }
  40% {
    background-color: #ff2400;
  }
  50% {
    background-color: #ff6347;
  }
  60% {
    background-color: #FA8223;
  }
  70% {
    background-color: #e3e81d;
  }
  80% {
    background-color: #1de840;
  }
  90% {
    background-color: #1ddde8;
  }
  100% {
    background-color: #00ABEC;
  }
`

const Container = styled.footer`
  margin: 100px 0 0;
  width: 100%;
`

const Wrapper = styled.div`
  ${grid};
  text-align: center;
`

const ExternalLink = styled.a`
  ${textStyles.hyperlink};
  color: ${colors.white};
  display: table;
  margin: 15px auto;
  padding: 0 0 5px;
  position: relative;
  overflow: hidden;

  :after {
    background: ${colors.white};
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    transition: 0.3s;
    height: 2px;
    width: 100%;
    transform: translateX(-110%);
  }

  :hover :after {
    transform: translateX(0);
  }

  @media (min-width: ${breakpoints.M}) {
    margin: 15px 0;
    text-align: left;
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;

  @media (min-width: ${breakpoints.M}) {
    margin: 75px 0;
    flex-direction: row;
  }
`

const InfoContainer = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.M}) {
    margin-right: 25px;
    width: 50%;
  }

  @media (min-width: ${breakpoints.XL}) {
    margin-right: 75px;
  }
`

const InfoDetails = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.M}) {
    margin: auto 0 auto 25px;
    width: 50%;
  }

  @media (min-width: ${breakpoints.XL}) {
    margin: auto 0 auto 75px;
  }
`

const ContactIllustration = styled.img`
  width: 100%;
  max-width: 350px;

  @media (min-width: ${breakpoints.M}) {
    max-width: 450px;
    margin-left: auto;
    display: block;
  }
`

const SocialsBlock = styled.div`
  margin: 50px auto 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (min-width: ${breakpoints.M}) {
    margin: 75px auto;
  }
`

const SocialMediaIcon = styled.img`
  width: 40px;
  height: auto;

  @media (min-width: ${breakpoints.M}) {
    width: auto;
  }
`

const IconContainer = styled.a`
  position: relative;
  width: auto;
  height: 100%;
  transition: 0.3s;
  padding: 15px;

  :nth-of-type(2) {
    margin: 0 25px;
  }

  @media (min-width: ${breakpoints.M}) {
    :nth-of-type(2) {
      margin: 0 50px;
    }
  }

  :hover {
    transform: scale(1.1) rotate(15deg);
  }
`

const Copy = styled.h6`
  margin: 50px 0 25px;
  ${textStyles.plainHeavy};
  color: ${colors.white};

  @media (min-width: ${breakpoints.M}) {
    margin: 75px 0 50px;
  }
`

const BottomStroke = styled.div`
  height: 15px;
  width: 100%;
  background-color: ${colors.accentOne.hex};
  transition: 3s;

  :hover {
    animation: ${rainbow} 15s ease infinite;
  }
`
