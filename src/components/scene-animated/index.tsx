import { useDrawerProgress } from '@react-navigation/drawer'
import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

import Colors from '../../constants/Colors'

export const SceneAnimated = ({ children }: { children: ReactNode }) => {
  const progress = useDrawerProgress()

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
      },
      {
        translateY: interpolate(progress.value, [0, 1], [0, 150], 'clamp'),
      },
      {
        translateX: interpolate(progress.value, [0, 1], [0, 50], 'clamp'),
      },
    ],
    overflow: 'hidden',
  }))

  return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: 20,
  },
})
