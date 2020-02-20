import React from 'react'
import { Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

export const createStyledHeader = (component, headerTitle) => {
  component.navigationOptions = ({ navigation }) => ({
    headerTitle: () => (
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'rgb(248, 228, 239)'
      }}>
        {headerTitle}
      </Text>
    ),
    headerTitleAlign: 'center',
    headerTintColor: 'rgb(248, 228, 239)',
    headerStyle: {
      backgroundColor: 'rgb(199, 29, 125)'
    },
    headerLeft: () =>
      <Icon
        style={{ marginLeft: 6 }}
        name='menu'
        color={'rgb(248, 228, 239)'}
        size={30}
        onPress={() => navigation.toggleDrawer()}
      />
  })
}

export const createStyledHeaderWithBackButton = (component) => {
  component.navigationOptions = ({ navigation }) => ({
    headerTitle: () => (
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'rgb(248, 228, 239)'
      }}>
        {navigation.getParam('name')}
      </Text>
    ),
    headerTitleAlign: 'center',
    headerTintColor: 'rgb(248, 228, 239)',
    headerStyle: {
      backgroundColor: 'rgb(199, 29, 125)'
    }
  })
}
