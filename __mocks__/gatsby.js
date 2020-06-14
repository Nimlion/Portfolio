const React = require("react")
const gatsby = jest.requireActual("gatsby")

const Link = jest.fn().mockImplementation(
  // these props are invalid for an `a` tag
  ({
    /* eslint-disable no-unused-vars */
    activeClassName,
    activeStyle,
    getProps,
    innerRef,
    partiallyActive,
    ref,
    replace,
    to,
    /* eslint-enable no-unused-vars */
    ...rest
  }) =>
    React.createElement("a", {
      ...rest,
      href: to,
    })
)
Link.displayName = "Link"

const StaticQuery = jest.fn()
StaticQuery.displayName = "StaticQuery"

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
  Link,
  StaticQuery,
}
