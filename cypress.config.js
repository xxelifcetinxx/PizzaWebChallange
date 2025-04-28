const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) { // <-- böyleyse
    setupNodeEvents() {
      // <-- böyle yap
      // implement node event listeners here
    },
  },
});
