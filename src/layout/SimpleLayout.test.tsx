import { render } from '@testing-library/react-native'
import React from 'react'
import { Text, View } from 'react-native'

import SimpleLayout from './SimpleLayout'

describe('SimpleLayout', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <SimpleLayout>
        <View>
          <Text>Test</Text>
        </View>
      </SimpleLayout>
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
