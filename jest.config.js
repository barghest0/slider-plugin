module.exports = {
  coverageProvider: 'v8',
  setupFiles: ['./jest.setup.js'],
  rootDir: './src',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.*\\.scss$': '<rootDir>/src/plugin/plugin.ts',
    '^src(.*)$': '<rootDir>/src/$1',
    '^components(.*)$': '<rootDir>/components/$1',
    '^demo(.*)$': '<rootDir>/demo/$1',
    '^utils(.*)$': '<rootDir>/utils/$1',
    '^plugin(.*)$': '<rootDir>/plugin/$1',
  },
};
