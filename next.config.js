// @ts-check
const { withBlitz } = require("@blitzjs/next")
const { withSVGr } = require("./scripts/withSVGr")
const withPWA = require("next-pwa")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {}

module.exports = withBlitz(withSVGr(config))
