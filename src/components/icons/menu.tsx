import React from "react"

// Types
import { IIcon } from "../../typings/general"

// Styling
import { SVG } from "./favicon"

const MenuSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="26"
    height="26"
    viewBox="0 0 26 26"
  >
    <g>
      <path d="M24.25 12.25H1.75c-.4140625 0-.75.3359375-.75.75s.3359375.75.75.75h22.5c.4140625 0 .75-.3359375.75-.75s-.3359375-.75-.75-.75zM1.75 7.75h22.5c.4140625 0 .75-.3359375.75-.75s-.3359375-.75-.75-.75H1.75c-.4140625 0-.75.3359375-.75.75s.3359375.75.75.75zM24.25 18.25H1.75c-.4140625 0-.75.3359375-.75.75s.3359375.75.75.75h22.5c.4140625 0 .75-.3359375.75-.75s-.3359375-.75-.75-.75z" />
    </g>
  </SVG>
)

export default MenuSVG
