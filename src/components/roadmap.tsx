import React from "react"
import styled, { css } from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import { Container, Wrapper } from "./interests"

// Typings
import { IEducation, IEducationBlock } from "../typings/general"

const Roadmap: React.FC<IEducation> = ({
  education,
  btnLabel,
  btnInternalLink,
}: IEducation) => {
  console.log(education)

  return (
    <Container>
      <Wrapper>
        <Road>
          {education.map((study: IEducationBlock, key: number) => {
            return (
              <Row key={key}>
                <Block>
                  <Image src={study.image.url} alt={study.image.alt} />
                </Block>
                <Block>
                  <Text>{study.paragraph}</Text>
                  <Holder>
                    <LinkBox
                      size="s"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={study.link}
                    >
                      {study.label}
                    </LinkBox>
                  </Holder>
                </Block>
              </Row>
            )
          })}
        </Road>
        {btnLabel && btnInternalLink && (
          <Holder>
            <LinkBox
              size="l"
              target="_blank"
              rel="noopener noreferrer"
              href={btnInternalLink}
            >
              {btnLabel}
            </LinkBox>
          </Holder>
        )}
      </Wrapper>
    </Container>
  )
}

export default Roadmap

interface IButton {
  size: "s" | "m" | "l"
}

const Road = styled.div`
  margin: 0;
  position: relative;

  :after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    top: 0;
    background-image: linear-gradient(black 33%, ${colors.white} 0%);
    background-position: right;
    background-size: 2px 25px;
    background-repeat: repeat-y;
  }

  @media (min-width: ${breakpoints.M}) {
    :after {
      left: 50%;
    }
  }
`

const Block = styled.div`
  width: 100%;
  margin: auto 0;
  padding: 0 0 0 20px;

  @media (min-width: ${breakpoints.M}) {
    width: 50%;

    :nth-of-type(odd) {
      padding: 0 40px 0 0;
    }
    :nth-of-type(even) {
      padding: 0 0 0 40px;
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 0;

  @media (min-width: ${breakpoints.M}) {
    flex-direction: row;

    :nth-of-type(odd) {
      flex-direction: row-reverse;

      ${Block} {
        :nth-of-type(odd) {
          padding: 0 0 0 40px;
        }
        :nth-of-type(even) {
          padding: 0 40px 0 0;
        }
      }
    }
  }
`

const Text = styled.p`
  ${textStyles.plainSubtle};
  color: ${colors.white};
  padding: 0 5px;
  margin: 0;

  @media (min-width: ${breakpoints.M}) {
    padding: 0;
  }
`

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
  margin: 0;
  border-radius: 10px;
  margin: 0 0 15px;

  @media (min-width: ${breakpoints.M}) {
    border-radius: 15px;
    margin: 0;
  }
`

const Holder = styled.span`
  display: flex;
`

const LinkBox = styled.a<IButton>`
  background: ${colors.accentTwo.hex};
  color: ${colors.white};
  position: relative;
  border: none;
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  ${props =>
    props.size === "s"
      ? css`
          ${textStyles.hyperlink}
          margin: 30px auto 0;
          padding: 6px 20px;

          :hover:before,
          :hover:after {
            height: 4px;
          }
        `
      : ``};

  ${props =>
    props.size === "m"
      ? css`
          ${textStyles.hyperlink}
          margin: 30px auto 0;
          padding: 12px 26px;

          :hover:before,
          :hover:after {
            height: 6px;
          }
        `
      : ``};

  ${props =>
    props.size === "l"
      ? css`
          ${textStyles.plainHeavy}
          margin: 50px auto 0;
          padding: 15px 32px;
          border-radius: 5px;

          :hover:before,
          :hover:after {
            height: 8px;
          }
        `
      : ``};

  :before,
  :after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0;
    background: ${colors.accentOne.hex};
    z-index: 0;
    transition: 0.3s;
  }

  :before {
    top: 0;
  }

  :after {
    bottom: 0;
  }
`
