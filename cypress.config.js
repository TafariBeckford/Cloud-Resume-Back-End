const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    integrationFolder: "cypress/API",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
