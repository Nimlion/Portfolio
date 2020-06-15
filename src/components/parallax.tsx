import React, { Component } from "react"
import styled from "styled-components"

// Styling
import colors from "../styles/colors"
import textStyles from "../styles/textStyles"
import breakpoints from "../styles/breakpoints"

interface IParallax {
  title: string
}

export class Parallax extends Component<IParallax> {
  public state = {
    offset: 0,
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.updateParallax)
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.updateParallax)
  }

  // Changes the image position for a parallax effect
  public updateParallax = () => {
    this.setState({
      offset: Math.round(window.pageYOffset),
    })
  }

  public render() {
    return (
      <Container>
        <ParallaxWrapper scroll={this.state.offset} id="name"></ParallaxWrapper>
        <Title>{this.props.title}</Title>
      </Container>
    )
  }
}

export default Parallax

interface IScroll {
  scroll: number
}

const Container = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${breakpoints.M}px) {
    height: 70vh;
  }
`
const ParallaxWrapper = styled.div<IScroll>`
  background-image: url("ocean.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  ${props =>
    props.scroll !== null
      ? `transform: scale(${1 + props.scroll / 1000});`
      : "transform: none;"};
`

const Title = styled.span`
  ${textStyles.title};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  text-align: center;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px ${colors.background};
`
