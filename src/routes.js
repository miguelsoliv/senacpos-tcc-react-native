import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from './pages/SplashScreen'
import Login from './pages/Login'

const InitialScreen = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen
  }
}, { headerMode: 'none' })

const LoginScreen = createStackNavigator({
  LoginScreen: {
    screen: Login
  }
}, { headerMode: 'none' })

export default createAppContainer(createSwitchNavigator({
  InitialScreen,
  LoginScreen
}))
