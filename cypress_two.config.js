const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 1,
    baseUrl: 'http://localhost:3000/',
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
