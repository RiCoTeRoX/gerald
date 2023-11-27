import { NavigationProp, useNavigation } from '@react-navigation/native'

import { StartStackParamList } from '../../navigator/StartNavigator'

const useDeepOneScreen = () => {
  const { navigate } = useNavigation<NavigationProp<StartStackParamList>>()

  const handleNavigateToScreenButtonPress = () => {
    navigate('DeepTwoScreen')
  }

  return {
    handleNavigateToScreenButtonPress,
  }
}

export default useDeepOneScreen
