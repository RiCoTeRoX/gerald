import React from 'react'
import { Text, Button } from 'react-native'

import useHomeScreen from './useHomeScreen'
import Colors from '../../constants/Colors'
import SimpleLayout from '../../layout/SimpleLayout'

const HomeScreen = () => {
  const { handleNavigateToScreenButtonPress } = useHomeScreen()

  return (
    <SimpleLayout bg={Colors.WHITE}>
      <Text>HomeScreen</Text>
      <Button title="Go to Deep one" onPress={handleNavigateToScreenButtonPress} />
    </SimpleLayout>
  )
}

export default HomeScreen
