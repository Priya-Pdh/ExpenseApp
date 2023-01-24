module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  testRegex: '.*\\.test\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/(build|node_modules)/'],
  collectCoverageFrom: ['src'],
  coverageThreshold: {
    global: {
      statements: 20,
      branches: 20,
      lines: 20,
      functions: 20,
    },
  },
  setupFiles: ['./src/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
