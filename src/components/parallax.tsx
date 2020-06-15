import React, { Component } from "react"
import styled from "styled-components"

export class Parallax extends Component {
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
      </Container>
    )
  }
}

export default Parallax

interface IParallax {
  scroll: number
}

const Container = styled.div`
  height: 1000px;
  width: 100%;
  overflow: hidden;
`
const ParallaxWrapper = styled.div<IParallax>`
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
