import { render } from '@testing-library/react-native'
import React from 'react'
import { Text, View } from 'react-native'

import SceneAnimated from '.'

describe('SceneAnimated', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <SceneAnimated>
        <View>
          <Text>Test</Text>
        </View>
      </SceneAnimated>
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
