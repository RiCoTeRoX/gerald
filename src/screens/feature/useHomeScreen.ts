import { NavigationProp, useNavigation } from '@react-navigation/native'

import { StartStackParamList } from '../../navigator/StartNavigator'

const useHomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<StartStackParamList>>()

  const handleNavigateToScreenButtonPress = () => {
    navigate('DeepOneScreen')
  }

  return {
    handleNavigateToScreenButtonPress,
  }
}

export default useHomeScreen
