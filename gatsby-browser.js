/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const COMMIT = process.env.COMMIT_HASH || "N.A."
const VERSION = process.env.VERSION || "N.A."

exports.onInitialClientRender = () => {
  console.info(`
  Version: ${VERSION}
  Commit: ${COMMIT}
  `)
}
