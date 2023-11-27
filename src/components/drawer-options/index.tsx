import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View, StyleSheet } from 'react-native'

import Colors from '../../constants/Colors'
import { DrawerAnimated } from '../drawer-animated'

const DrawerOptions = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <DrawerAnimated>
        <View style={styles.contentContainer}>
          <DrawerContentScrollView {...props} contentContainerStyle={styles.content}>
            <View style={styles.items}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
        </View>
      </DrawerAnimated>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
  contentContainer: {
    backgroundColor: Colors.BLUE,
    flex: 1,
    borderTopLeftRadius: 20,
    width: '100%',
  },
  content: {
    alignSelf: 'stretch',
  },
  items: {
    paddingTop: 10,
    color: Colors.WHITE,
  },
})

export default DrawerOptions
