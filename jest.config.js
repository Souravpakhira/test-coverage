
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/app/'],
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: [
    "app/**/*.ts"
  ],
  collectCoverage: true,
  coverageReporters: [
    "text",
    "cobertura"
  ]
};
