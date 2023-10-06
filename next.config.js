const million = require("million/compiler")
// @ts-check
const { withBlitz } = require("@blitzjs/next")
const { withSVGr } = require("./scripts/withSVGr")
const withPWA = require("next-pwa")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = million.next(withBlitz(withSVGr(config)), {
  auto: {
    threshold: 0.25,
    skip: [/Icon.*/g],
  },
})
