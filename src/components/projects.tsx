import React from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

// Components
import CodeSVG from "./icons/code"
import SiteSVG from "./icons/site"
import DesignSVG from "./icons/design"
import PythonSVG from "./icons/tech/python"
import { Container, Wrapper } from "./interests"
import AngularSVG from "./icons/tech/angular"
import FlutterSVG from "./icons/tech/flutter"
import LaravelSVG from "./icons/tech/laravel"
import JavaSVG from "./icons/tech/java"
import PHPSVG from "./icons/tech/php"
import ReactSVG from "./icons/tech/react"

interface IProjects {
  projects: IProject[]
}

interface IProject {
  data: any
}

export const checkTech = (tech: string, source: string) => {
  if (source.toLowerCase().search(tech) !== -1) {
    return true
  } else {
    return false
  }
}

const Projects: React.FC<IProjects> = ({ projects }: IProjects) => {
  const redirect = (projectName: string) => {
    window.location.href = "/project/?" + projectName
  }

  return (
    <Container>
      <Wrapper>
        <ProjectContainer>
          {projects.map((project: IProject, key: number) => (
            <Project
              key={key}
              url={project.data.project_hero.url}
              onClick={() => redirect(project.data.route)}
            >
              <Technologies>
                {checkTech("java", project.data.technologies) && (
                  <JavaSVG color={colors.white} />
                )}
                {checkTech("react", project.data.technologies) && (
                  <ReactSVG color={colors.white} />
                )}
                {checkTech("angular", project.data.technologies) && (
                  <AngularSVG color={colors.white} />
                )}
                {checkTech("flutter", project.data.technologies) && (
                  <FlutterSVG color={colors.white} />
                )}
                {checkTech("php", project.data.technologies) && (
                  <PHPSVG color={colors.white} />
                )}
                {checkTech("laravel", project.data.technologies) && (
                  <LaravelSVG color={colors.white} />
                )}
                {checkTech("python", project.data.technologies) && (
                  <PythonSVG color={colors.white} />
                )}
              </Technologies>
              <Title>{project.data.project_title[0].text}</Title>
              <Links>
                {project.data.designurl && (
                  <ExternalLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.data.designurl}
                  >
                    <DesignSVG color={colors.white} />
                  </ExternalLink>
                )}
                {project.data.codeurl && (
                  <ExternalLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.data.codeurl}
                  >
                    <CodeSVG color={colors.white} />
                  </ExternalLink>
                )}
                {project.data.domainurl && (
                  <ExternalLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.data.domainurl}
                  >
                    <SiteSVG color={colors.white} />
                  </ExternalLink>
                )}
              </Links>
            </Project>
          ))}
        </ProjectContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Technologies = styled.div`
  position: absolute;
  left: 50%;
  top: 25px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  svg {
    height: 50px;
    width: 50px;
    margin: 0 20px;
    filter: drop-shadow(0px 0px 2px ${colors.shadow});
  }

  @media (min-width: ${breakpoints.M}) {
    transform: translate(-50%, -200%);

    svg {
      margin: 0 30px;
      height: 60px;
      width: 60px;
    }
  }
`

const Project = styled.div<{ url: string }>`
  width: 100%;
  height: 500px;
  position: relative;
  position: relative;
  transition: 0.3s;
  overflow: hidden;
  box-shadow: 2px 2px 6px ${colors.shadow};
  cursor: pointer;

  :hover {
    transform: scale(1.02);

    ${Technologies} {
      transform: translate(-50%, 0);
    }
  }

  ::before {
    background-image: ${props =>
      props.url ? `url("${props.url}")` : `url("ocean.jpg")`};
    background-size: cover;
    background-position: center;
    filter: blur(2px);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${breakpoints.M}) {
    box-shadow: 2px 2px 10px ${colors.shadow};

    :nth-of-type(odd) {
      margin: 0 25px 0 0;
    }

    :nth-of-type(even) {
      margin: 0 0 0 25px;
    }

    :nth-of-type(n + 3) {
      margin-top: 50px;
    }
  }
`

const Title = styled.h2`
  ${textStyles.title};
  color: ${colors.white};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  text-align: center;
  text-shadow: 5px 5px 6px ${colors.shadow};
`

const Links = styled.div`
  position: absolute;
  left: 50%;
  bottom: 25px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ExternalLink = styled.a`
  margin: 0;

  svg {
    height: 50px;
    width: 50px;
    margin: 0 20px;
    filter: drop-shadow(0px 0px 2px ${colors.shadow});

    :hover {
      transform: scale(1.2) rotate(-5deg);
    }
  }

  @media (min-width: ${breakpoints.M}) {
    svg {
      margin: 0 30px;
      height: 60px;
      width: 60px;
    }
  }
`

const ProjectLink = styled.a`
  height: 100%;
  width: 100%;
  display: block;

  :not(:first-of-type) ${Project} {
    margin: 50px 0 0;
  }

  @media (min-width: ${breakpoints.M}) {
    width: calc(50% - 25px);

    :nth-of-type(-n + 2) ${Project} {
      margin: 0;
    }

    :nth-of-type(odd) {
      margin: 0 25px 0 0;
    }

    :nth-of-type(even) {
      margin: 0 0 0 25px;
    }
  }
`
