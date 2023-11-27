import React from 'react'
import { Text } from 'react-native'

import { SceneAnimated } from '../../components/scene-animated'
import Colors from '../../constants/Colors'
import SimpleLayout from '../../layout/SimpleLayout'

const FavoritesScreen = () => {
  return (
    <SceneAnimated>
      <SimpleLayout bg={Colors.WHITE}>
        <Text>FavoritesScreen</Text>
      </SimpleLayout>
    </SceneAnimated>
  )
}

export default FavoritesScreen
