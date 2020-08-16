import React from "react"

// Types
import { IIcon } from "../../typings/general"

// Styling
import { SVG } from "./favicon"

const InstaSVG = ({ className, color }: IIcon) => (
  <SVG
    className={className}
    fill={color}
    width="50"
    height="52"
    viewBox="0 0 50 52"
  >
    <path d="M25 12.487c-7.056 0-12.903 5.948-12.903 13.358S17.843 39.203 25 39.203s12.903-6.053 12.903-13.358c0-7.305-5.846-13.358-12.903-13.358zm0 21.915c-4.536 0-8.266-3.86-8.266-8.557 0-4.696 3.73-8.558 8.266-8.558s8.266 3.862 8.266 8.558-3.73 8.557-8.266 8.557zM38.407 15.2c1.615 0 2.924-1.355 2.924-3.026 0-1.672-1.31-3.027-2.924-3.027-1.614 0-2.923 1.355-2.923 3.027 0 1.671 1.309 3.026 2.923 3.026z" />
    <path d="M45.968 4.347C43.347 1.529 39.617.068 35.383.068H14.617C5.847.068 0 6.121 0 15.2v21.394c0 4.488 1.411 8.349 4.234 11.167 2.722 2.713 6.35 4.07 10.484 4.07h20.564c4.335 0 7.964-1.461 10.585-4.07C48.589 45.047 50 41.186 50 36.698V15.2c0-4.383-1.411-8.14-4.032-10.853zm-.404 32.352c0 3.235-1.108 5.844-2.923 7.618-1.814 1.774-4.335 2.713-7.359 2.713H14.718c-3.024 0-5.545-.94-7.36-2.713-1.814-1.879-2.72-4.488-2.72-7.723V15.2c0-3.13.906-5.74 2.72-7.618 1.715-1.774 4.336-2.713 7.36-2.713h20.766c3.024 0 5.544.939 7.359 2.817 1.713 1.879 2.721 4.488 2.721 7.514V36.7z" />
  </SVG>
)

export default InstaSVG