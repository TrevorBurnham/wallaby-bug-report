module.exports = function(wallaby) {
  return {
    testFramework: 'jest',

    env: {
      type: 'node',
      runner: 'node',
    },

    files: [
      'subproject/src/**/*.js',
      'subproject/src/**/*.snap',
      'subproject/jest.config.js',
      'subproject/config/jest/setupTests.js',
      '!subproject/src/**/__tests__/*.js',
    ],

    tests: ['subproject/src/**/__tests__/*.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    setup(wallaby) {
      const jestConfig = require(`./subproject/jest.config.js`);
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
