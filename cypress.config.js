const { defineConfig } = require("cypress");

module.exports = defineConfig({
  testFiles: "**/*.{spec,test}.js",
  e2e: {
    specPattern: "**/API/**/*.spec.js" ,
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
