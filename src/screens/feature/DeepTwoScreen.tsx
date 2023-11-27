import React from 'react'
import { Text, Button } from 'react-native'

import useDeepTwoScreen from './useDeepTwoScreen'
import Colors from '../../constants/Colors'
import SimpleLayout from '../../layout/SimpleLayout'

const DeepTwoScreen = () => {
  const { handleNavigateToScreenButtonPress } = useDeepTwoScreen()

  return (
    <SimpleLayout bg={Colors.WHITE}>
      <Text>DeepTwoScreen</Text>
      <Button title="Back to Home" onPress={handleNavigateToScreenButtonPress} />
    </SimpleLayout>
  )
}

export default DeepTwoScreen
