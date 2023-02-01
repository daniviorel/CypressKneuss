const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "zb5ik5",
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://test.kneuss.com/",
    viewportWidth: 1920,
    viewportHeight: 1280,
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
  'defaultCommandTimeout': 10000,
})