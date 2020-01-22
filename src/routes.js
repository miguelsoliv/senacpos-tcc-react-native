import React from 'react'
import { Dimensions } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SplashScreen from './pages/SplashScreen'
import Login from './pages/Login'
import Home from './pages/Home'
import DrawerScreen2 from './pages/Home'
import SidebarHeader from './components/SidebarHeader'

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name='home' size={24} color={tintColor} />
      )
    }
  },
  DrawerScreen2: {
    screen: DrawerScreen2,
    navigationOptions: {
      drawerLabel: 'Perfil',
      drawerIcon: ({ tintColor }) => (
        <Icon name='person' size={24} color={tintColor} />
      )
    }
  }
}, {
  contentComponent: SidebarHeader,
  drawerWidth: Dimensions.get('window').width * 0.8,
  contentOptions: {
    activeBackgroundColor: 'rgba(255, 96, 144, 0.2)',
    activeTintColor: 'rgb(216, 27, 96)',
    itemsContainerStyle: {
      marginTop: 14
    },
    itemStyle: {
      borderRadius: 2
    }
  }
})

const InitialScreen = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen
  }
}, { headerMode: 'none' })

const LoginHomeScreen = createStackNavigator({
  LoginScreen: {
    screen: Login
  },
  DrawerNav: {
    screen: DrawerNavigator
  }
}, { headerMode: 'none' })

export default createAppContainer(createSwitchNavigator({
  InitialScreen,
  LoginHomeScreen
}))
