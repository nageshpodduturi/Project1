const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    waitForAnimations: false,
  animationDistanceThreshold: 50,
    baseUrl:"https://d.iscr.com.au/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
