import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import TabNavigator from './tabNavigator'
import DrawerOptions from '../components/drawer-options'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/favorites/FavoritesScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        drawerContent={props => <DrawerOptions {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'back',
          overlayColor: Colors.TRANSPARENT,
          drawerActiveBackgroundColor: Colors.TRANSPARENT,
          drawerInactiveBackgroundColor: Colors.TRANSPARENT,
          drawerInactiveTintColor: Colors.WHITE,
          drawerActiveTintColor: Colors.RED,
          drawerStyle: {
            width: '40%',
          },
          drawerItemStyle: {
            backgroundColor: Colors.RED_BG,
          },
          sceneContainerStyle: {
            backgroundColor: Colors.TRANSPARENT, // no
          },
        }}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
})

export default DrawerNavigator
