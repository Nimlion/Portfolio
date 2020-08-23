import React from "react"

// Types
import { IIcon } from "../../../typings/general"

// Styling
import { SVG } from "./../favicon"

const FlutterSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
  </SVG>
)

export default FlutterSVG
