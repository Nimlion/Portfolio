import React from "react"

// Types
import { IIcon } from "../../typings/general"

// Styling
import { SVG } from "./favicon"

const CodeSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z" />
  </SVG>
)

export default CodeSVG
