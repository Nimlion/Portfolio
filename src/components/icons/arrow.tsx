import React from "react"

// Types
import { IIcon } from "../../typings/general"

// Styling
import { SVG } from "./favicon"

const ArrowSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="46"
    height="75"
    viewBox="0 0 46 75"
  >
    <path d="M45.1533 67.4063L37.583 75L0.15332 37.5L37.583 0L45.1533 7.59375L15.3174 37.5L45.1533 67.4063Z" />
  </SVG>
)

export default ArrowSVG
