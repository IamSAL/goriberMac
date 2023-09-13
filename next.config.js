// @ts-check
const { withBlitz } = require("@blitzjs/next")
const { withSVGr } = require("./scripts/withSVGr")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {}

module.exports = withBlitz(withSVGr(config))
