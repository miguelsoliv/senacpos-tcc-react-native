import React from 'react'
import { Dimensions } from 'react-native'

import { createAppContainer, withNavigationFocus } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  SplashScreen, Login, CreateAccount, ForgotPassword, Home, Profile,
  ManicureDetails
} from './pages'

import SidebarHeader from './components/SidebarHeader'

const SignRoutes = createAnimatedSwitchNavigator({
  Login,
  CreateAccount,
  ForgotPassword
}, {
  transitionViewStyle: { backgroundColor: 'rgb(248, 228, 239)' },
  transition: (
    <Transition.Together>
      <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
      <Transition.In type="fade" durationMs={200} />
    </Transition.Together>
  )
})

const HomeDrawer = createStackNavigator({
  Home: {
    screen: withNavigationFocus(Home)
  }
})

const ProfileDrawer = createStackNavigator({
  Profile: {
    screen: withNavigationFocus(Profile)
  }
})

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeDrawer,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name='home' size={24} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileDrawer,
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

const AppRoutes = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
  ManicureDetails: {
    screen: withNavigationFocus(ManicureDetails)
  }
})

export default createAppContainer(createAnimatedSwitchNavigator({
  SplashScreen,
  SignRoutes,
  AppRoutes
}, {
  transitionViewStyle: { backgroundColor: 'rgb(248, 228, 239)' },
  transition: (
    <Transition.Together>
      <Transition.Out type="fade" durationMs={300} interpolation="easeOut" />
      <Transition.In type="fade" durationMs={300} />
    </Transition.Together>
  )
}))
