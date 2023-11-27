const config = {
  preset: 'react-native',
  testMatch: ['**/*.test.js?(x)', '**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './jestSetup.js'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', './jestSetup.js'],
}

module.exports = config
