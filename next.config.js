const million = require("million/compiler")
// @ts-check
const { withBlitz } = require("@blitzjs/next")
const { withSVGr } = require("./scripts/withSVGr")
const withPWA = require("next-pwa")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {}

module.exports = million.next(withBlitz(withSVGr(config)), { auto: true })
