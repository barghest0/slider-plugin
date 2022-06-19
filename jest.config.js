module.exports = {
  coverageProvider: 'v8',
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  rootDir: './',
  moduleNameMapper: {
    '.*\\.scss$': '<rootDir>/src/plugin/plugin.ts',
    '^src(.*)$': '<rootDir>/src/$1',
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^demo(.*)$': '<rootDir>/src/demo/$1',
    '^utils(.*)$': '<rootDir>/src/utils/$1',
    '^plugin(.*)$': '<rootDir>/src/plugin/$1',
  },
};
