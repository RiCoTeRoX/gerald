import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useMemo } from 'react'
import React, { Platform, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import StartStackNavigator from './StartNavigator'
import { SceneAnimated } from '../components/scene-animated'
import Colors from '../constants/Colors'
import ContactsScreen from '../screens/contacts/ContactsScreen'

export type TabNavigatorParamList = {
  HomeStack: undefined
  ContactsScreen: undefined
}

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator = () => {
  const isAndroid = useMemo(() => Platform.OS === 'android', [Platform.OS])
  const insets = useSafeAreaInsets()

  return (
    <SceneAnimated>
      <View style={styles.container}>
        <Tab.Navigator
          detachInactiveScreens={false} // This is so tabs don't crash on android given certain Fabric behaviours
          screenOptions={{
            lazy: true,
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              paddingVertical: isAndroid ? 0 : 10,
              paddingBottom: isAndroid ? 10 : 0,
              height: isAndroid ? 70 : 50,
              bottom: insets.bottom,
            },
            tabBarActiveTintColor: Colors.RED,
            tabBarInactiveTintColor: Colors.GREEN,
          }}>
          <Tab.Screen name="HomeStack" component={StartStackNavigator} />
          <Tab.Screen
            name="ContactsScreen"
            component={ContactsScreen}
            options={{
              title: 'Contacts',
            }}
          />
        </Tab.Navigator>
      </View>
    </SceneAnimated>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    flex: 1,
    backgroundColor: Colors.TRANSPARENT,
  },
})

export default TabNavigator
