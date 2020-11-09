import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import { Container, Wrapper, Title } from "./interests"

// Typings
import { ISkills, ISkill, ISkillItem } from "../typings/general"

const Skills: React.FC<ISkills> = ({ title, skills }: ISkills) => (
  <Container>
    <Wrapper>
      <Title>{title}</Title>
      {skills.map((category: ISkill, key: number) => (
        <SkillBox primary={category.primary} items={category.items} key={key} />
      ))}
    </Wrapper>
  </Container>
)

const SkillBox: React.FC<ISkill> = ({ items, primary }: ISkill) => {
  const [opened, setOpened] = useState(false)
  const [boxHeight, setBoxHeight] = useState(0)
  const boxRef = useRef<HTMLDivElement | null>(null)

  const ToggleBox = () => {
    if (
      boxRef !== null &&
      boxRef.current !== null &&
      boxRef.current.firstElementChild !== null
    ) {
      setBoxHeight(boxRef.current.firstElementChild.clientHeight)
      setOpened(prevState => !prevState)
    }
  }

  useLayoutEffect(() => {
    function updateSize() {
      setOpened(false)
    }
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <>
      <SkillBar onClick={() => ToggleBox()}>
        {primary.category_name[0].text}
      </SkillBar>
      <TogglableBox active={opened} height={boxHeight} ref={boxRef}>
        <SkillBlock>
          {items.map((item: ISkillItem, key: number) => (
            <Skill key={key}>{item.item}</Skill>
          ))}
        </SkillBlock>
      </TogglableBox>
    </>
  )
}

export default Skills

const SkillBar = styled.div`
  ${textStyles.plainHeavy};
  color: ${colors.white};
  padding: 25px;
  background-color: ${colors.darkGrey};
  border-bottom: 3px solid ${colors.accentOne.hex};
  cursor: pointer;
`

const TogglableBox = styled.div<{ height: number; active: boolean }>`
  background-color: ${colors.darkGrey};
  overflow: hidden;
  transition: 0.5s;
  border-bottom: 2px solid ${colors.background};

  ${props =>
    props.active
      ? `max-height: ${props.height}px;`
      : `max-height: 0; border: none;`}
`

const SkillBlock = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Skill = styled.div`
  ${textStyles.plainSubtle};
  width: 50%;
  color: ${colors.white};
  padding: 20px 25px;
  text-align: center;
  margin: 0;

  @media (min-width: ${breakpoints.M}) {
    padding: 30px 50px;
    width: 25%;
    text-align: left;
    margin: 0;
  }

  @media (min-width: ${breakpoints.L}) {
    width: 20%;
  }
`
