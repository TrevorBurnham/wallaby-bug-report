module.exports = function(wallaby) {
  return {
    testFramework: 'jest',

    env: {
      type: 'node',
      runner: 'node',
    },

    files: [
      'src/**/*.js',
      'src/**/*.snap',
      'jest.config.js',
      'config/jest/setupTests.js',
      '!src/**/__tests__/*.js',
    ],

    tests: ['src/**/__tests__/*.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    setup(wallaby) {
      const jestConfig = require(`./jest.config.js`);
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
