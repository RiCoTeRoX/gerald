import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import TabNavigator from './tabNavigator'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/favorites/FavoritesScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator>
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
