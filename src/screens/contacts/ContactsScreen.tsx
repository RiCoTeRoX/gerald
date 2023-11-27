import React from 'react'
import { Text } from 'react-native'

import Colors from '../../constants/Colors'
import SimpleLayout from '../../layout/SimpleLayout'

const ContactsScreen = () => {
  return (
    <SimpleLayout bg={Colors.WHITE}>
      <Text>Contacts</Text>
    </SimpleLayout>
  )
}

export default ContactsScreen
