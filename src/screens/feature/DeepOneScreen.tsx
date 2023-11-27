import React from 'react'
import { Text, Button } from 'react-native'

import useDeepOneScreen from './useDeepOneScreen'
import Colors from '../../constants/Colors'
import SimpleLayout from '../../layout/SimpleLayout'

const DeepOneScreen = () => {
  const { handleNavigateToScreenButtonPress } = useDeepOneScreen()

  return (
    <SimpleLayout bg={Colors.WHITE}>
      <Text>DeepOneScreen</Text>
      <Button title="Go to Deep Two" onPress={handleNavigateToScreenButtonPress} />
    </SimpleLayout>
  )
}

export default DeepOneScreen
