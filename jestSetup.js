// jest
// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup'

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest
  .mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock')

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {}

    return Reanimated
  })
  .mock('@react-navigation/drawer', () => ({
    useDrawerProgress: jest.fn().mockReturnValue({ value: 0.5 }), // Simulating a value for progress
    DrawerItemList: jest.fn().mockReturnValue(null),
    DrawerContentScrollView: jest.fn().mockReturnValue(null),
  }))

  // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
  .mock('react-native/Libraries/Animated/NativeAnimatedHelper')

  .mock('react-native-safe-area-context', () => {
    const inset = { top: 0, right: 0, bottom: 0, left: 0 }

    return {
      ...jest.requireActual('react-native-safe-area-context'),
      SafeAreaProvider: jest.fn(({ children }) => children),
      SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
      useSafeAreaInsets: jest.fn(() => inset),
      useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 })),
    }
  })
