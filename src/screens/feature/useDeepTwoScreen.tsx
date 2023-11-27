import { NavigationProp, useNavigation } from '@react-navigation/native'

import { StartStackParamList } from '../../navigator/StartNavigator'

const useDeepTwoScreen = () => {
  const { reset } = useNavigation<NavigationProp<StartStackParamList>>()

  const handleNavigateToScreenButtonPress = () => {
    reset({ index: 0, routes: [{ name: 'HomeScreen' }] })
  }

  return {
    handleNavigateToScreenButtonPress,
  }
}

export default useDeepTwoScreen
