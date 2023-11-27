import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import DeepOneScreen from '../screens/feature/DeepOneScreen'
import DeepTwoScreen from '../screens/feature/DeepTwoScreen'
import HomeScreen from '../screens/feature/HomeScreen'

export type StartStackParamList = {
  HomeScreen: undefined
  DeepOneScreen: undefined
  DeepTwoScreen: undefined
}

const StartStack = createStackNavigator<StartStackParamList>()

const StartStackNavigator = () => (
  <StartStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <StartStack.Screen name="HomeScreen" component={HomeScreen} />
    <StartStack.Screen name="DeepOneScreen" component={DeepOneScreen} />
    <StartStack.Screen name="DeepTwoScreen" component={DeepTwoScreen} />
  </StartStack.Navigator>
)

export default StartStackNavigator
