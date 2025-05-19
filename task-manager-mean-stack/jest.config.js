module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/api/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s$',
};