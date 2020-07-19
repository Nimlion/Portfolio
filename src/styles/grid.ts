import { css } from "styled-components"

// Styling
import breakpoints from "./breakpoints"

// Main grid
export default css`
  margin: 0 auto;
  max-width: 288px;

  @media (min-width: ${breakpoints.XS}) {
    max-width: 432px;
  }

  @media (min-width: ${breakpoints.S}) {
    max-width: 640px;
  }

  @media (min-width: ${breakpoints.M}) {
    max-width: 960px;
  }

  @media (min-width: ${breakpoints.L}) {
    max-width: 1120px;
  }

  @media (min-width: ${breakpoints.XL}) {
    max-width: 1440px;
  }
`
