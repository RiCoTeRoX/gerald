const config = {
  preset: 'react-native',
  testMatch: ['**/*.test.js?(x)', '**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', './jestSetup.js'],
}

module.exports = config
