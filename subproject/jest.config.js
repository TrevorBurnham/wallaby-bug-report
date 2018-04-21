const { resolve } = require('path');

module.exports = {
  rootDir: './src',
  setupTestFrameworkScriptFile: resolve(
    __dirname,
    './config/jest/setupTests.js'
  ),
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
