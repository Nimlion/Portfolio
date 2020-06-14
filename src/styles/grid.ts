import { css } from "styled-components"

// Styling
import breakpoints from "./breakpoints"

// Main grid
export default css`
  margin: 0 auto;
  max-width: 288px;

  @media (min-width: ${breakpoints.XS}px) {
    max-width: 432px;
  }

  @media (min-width: ${breakpoints.S}px) {
    max-width: 640px;
  }

  @media (min-width: ${breakpoints.M}px) {
    max-width: 960px;
  }

  @media (min-width: ${breakpoints.L}px) {
    max-width: 1120px;
  }

  @media (min-width: ${breakpoints.XL}px) {
    max-width: 1440px;
  }
`
