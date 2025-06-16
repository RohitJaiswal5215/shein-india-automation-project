const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.sheinindia.in', 
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/e2e.js' 
  }
});
