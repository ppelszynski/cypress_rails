const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5017",
    defaultCommandTimeout: 5000,
    supportFile: "cypress/support/index.js",
    video: false,
  }
})
