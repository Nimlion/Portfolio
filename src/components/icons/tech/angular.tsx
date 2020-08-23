import React from "react"

// Types
import { IIcon } from "../../../typings/general"

// Styling
import { SVG } from "./../favicon"

const AngularSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path d="M216.879 268.426h78.241L256 174.372l-39.121 94.054zM256 26.001L42.635 102.395l32.652 283.081L256 485.999l180.712-100.523 32.653-283.081L256 26.001zm133.688 350.956h-49.904l-26.9-67.153H199.321l-26.903 67.153h-50.003L256 76.827l133.688 300.13z" />
  </SVG>
)

export default AngularSVG
