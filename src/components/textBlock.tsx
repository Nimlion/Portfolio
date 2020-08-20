import React from "react"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import { Container, Wrapper, Title } from "./interests"
import styled from "styled-components"

// Typings

const TextBlock: React.FC = (data: any) => {
  return (
    <Container>
      <Wrapper>
        <Title>{data.title[0].text}</Title>
        {data.content.map((paragraph: any, key: number) => {
          if (paragraph.spans.length > 0) {
            const textSpans: string[] = []

            paragraph.spans.map((link: any) => {
              textSpans.push(paragraph.text.substring(link.start, link.end))
            })

            for (let i = 0; i < textSpans.length; i++) {
              paragraph.text = paragraph.text.replace(
                textSpans[i],
                `<a href=${paragraph.spans[i].data.url} target="_blank" rel="noopener noreferrer">${textSpans[i]}</a>`
              )
            }
          }

          return (
            <Paragraph
              key={key}
              dangerouslySetInnerHTML={{ __html: paragraph.text }}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default TextBlock

const Paragraph = styled.p`
  ${textStyles.plainSubtle};
  color: ${colors.white};

  a {
    color: ${colors.accentTwo.hex};
    text-decoration: none;
    white-space: nowrap;
    position: relative;

    :after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      margin: auto;
      width: 0%;
      height: 1px;
      background: currentColor;
      transition: 0.2s;
    }

    :hover:after {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.M}) {
    margin: 30px 0;
  }
`
