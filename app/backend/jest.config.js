module.exports = {
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: ['js', 'json'],
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/node_modules/**',
    '!**/jest.config.js**'
  ],
  coverageReporters: ['text', 'lcov']
};
