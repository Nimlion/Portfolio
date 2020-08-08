import React from "react"

// Types
import { IIcon } from "../../typings/general"

// Styling
import { SVG } from "./favicon"

const CloseSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="39"
    height="36"
    viewBox="0 0 39 36"
  >
    <path
      strokeWidth="3"
      stroke={color}
      d="M4.061 1.939l33 33M1.939 34.939l33-33"
    />
  </SVG>
)

export default CloseSVG
