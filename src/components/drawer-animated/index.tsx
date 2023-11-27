import { useDrawerProgress } from '@react-navigation/drawer'
import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const DrawerAnimated = ({ children }: { children: ReactNode }) => {
  const progress = useDrawerProgress()

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
      },
    ],
  }))

  return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
