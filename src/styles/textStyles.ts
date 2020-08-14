import { css } from "styled-components"

// Styling
import { fonts, fontWeights } from "./fonts"
import breakpoints from "./breakpoints"

// Main textstyles
export default {
  titleLoud: css`
    font-family: ${fonts.primary};
    font-weight: ${fontWeights.semiBold};
    font-size: 40px;
    line-height: 1.4;
    letter-spacing: 2px;

    @media (min-width: ${breakpoints.M}) {
      font-size: 64px;
    }

    @media (min-width: ${breakpoints.L}) {
      font-size: 80px;
    }

    @media (min-width: ${breakpoints.XL}) {
      font-size: 96px;
    }
  `,
  title: css`
    font-family: ${fonts.secondary};
    font-weight: ${fontWeights.semiBold};
    font-size: 28px;
    line-height: 1.3;
    letter-spacing: 1px;

    @media (min-width: ${breakpoints.S}) {
      font-size: 32px;
    }
    @media (min-width: ${breakpoints.L}) {
      font-size: 48px;
    }

    @media (min-width: ${breakpoints.XL}) {
      font-size: 65px;
    }
  `,
  highlight: css`
    font-family: ${fonts.primary};
    font-weight: ${fontWeights.bold};
    font-size: 22px;
    line-height: 1;
    letter-spacing: 1px;

    @media (min-width: ${breakpoints.M}) {
      font-size: 26px;
    }

    @media (min-width: ${breakpoints.L}) {
      font-size: 30px;
    }

    @media (min-width: ${breakpoints.XL}) {
      font-size: 34px;
    }
  `,
  plainHeavy: css`
    font-family: ${fonts.secondary};
    font-weight: ${fontWeights.semiBold};
    font-size: 22px;
    line-height: 26px;

    @media (min-width: ${breakpoints.L}) {
      font-size: 26px;
      line-height: 28px;
    }

    @media (min-width: ${breakpoints.XL}) {
      font-size: 30px;
      line-height: 34px;
    }
  `,
  plainSubtle: css`
    font-family: ${fonts.primary};
    font-weight: ${fontWeights.medium};
    font-size: 14px;
    line-height: 24px;

    @media (min-width: ${breakpoints.M}) {
      font-size: 16px;
    }

    @media (min-width: ${breakpoints.L}) {
      font-size: 20px;
    }

    @media (min-width: ${breakpoints.XL}) {
      font-size: 24px;
      line-height: 32px;
    }
  `,
  hyperlink: css`
    font-family: ${fonts.primary};
    font-weight: ${fontWeights.medium};
    text-decoration: none;
    cursor: pointer;

    span {
      position: relative;
    }

    :hover {
      text-decoration: underline;
    }
  `,
}
