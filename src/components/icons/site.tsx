import React from "react"

// Types
import { IIcon } from "../../typings/general"

// Styling
import { SVG } from "./favicon"

const SiteSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill="none"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm6.9 6H14c-.3-1.3-.8-2.4-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6zM10 2c.8 1.2 1.5 2.5 1.9 4H8.1c.4-1.4 1.1-2.8 1.9-4zM2.3 12c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.4c-.1.7-.1 1.3-.1 2s.1 1.3.1 2H2.3zm.8 2H6c.3 1.3.8 2.4 1.4 3.6-1.8-.7-3.4-1.9-4.3-3.6zM6 6H3.1c1-1.7 2.5-2.9 4.3-3.6C6.8 3.6 6.3 4.7 6 6zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.4-1.1 2.8-1.9 4zm2.3-6H7.7c-.1-.7-.2-1.3-.2-2s.1-1.3.2-2h4.7c.1.7.2 1.3.2 2s-.2 1.3-.3 2zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9c-.9 1.7-2.5 2.9-4.3 3.6zm1.8-5.6c.1-.7.1-1.3.1-2s-.1-1.3-.1-2h3.4c.2.6.3 1.3.3 2s-.1 1.4-.3 2h-3.4z"
      fill={color}
      fillRule="evenodd"
    />
  </SVG>
)

export default SiteSVG
