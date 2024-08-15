const { defineConfig } = require("cypress");
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videoCompression: 32,
    videosFolder: path.resolve('C:', 'Users', 'MAbuAlrob', 'Desktop', 'cypress-videos'), // Windows path
  },
});
