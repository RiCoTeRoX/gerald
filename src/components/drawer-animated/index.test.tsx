import { render } from '@testing-library/react-native'
import React from 'react'
import { Text, View } from 'react-native'

import DrawerAnimated from '.'

describe('DrawerAnimated', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <DrawerAnimated>
        <View>
          <Text>Test</Text>
        </View>
      </DrawerAnimated>
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
