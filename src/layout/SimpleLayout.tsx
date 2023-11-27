import React, { FC, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type SimpleLayoutProps = {
  children: ReactNode
  bg?: string
}

const SimpleLayout: FC<SimpleLayoutProps> = ({ children, bg }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]} edges={{ top: 'maximum', bottom: 'maximum' }}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 26,
  },
})

export default SimpleLayout
