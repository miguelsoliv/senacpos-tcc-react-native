import React from 'react'
import { ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'

import {
  HeaderBackground, DrawerItemsContainer,
  InitialLetterContainer, InitialLetterText, ProfileName, Divider,
  LogoutContainer, LogoutText, LogoutIcon
} from './styles'

const teste = 'usuário 001'

export default function SidebarHeader(props) {
  return (
    <ScrollView>
      <HeaderBackground>
        <InitialLetterContainer>
          <InitialLetterText>{teste.toUpperCase().substr(0, 1)}</InitialLetterText>
        </InitialLetterContainer>
        <ProfileName>Bem-vindo(a) {teste}</ProfileName>
      </HeaderBackground>

      <DrawerItemsContainer>
        <DrawerNavigatorItems {...props} />
        <Divider />

        <TouchableWithoutFeedback onPress={() => {
          Alert.alert(
            'Sair',
            'Deseja sair da sua conta?',
            [
              {
                text: 'Não',
                style: 'cancel'
              },
              {
                text: 'Sim',
                onPress: () => props.navigation.navigate('Login')
              }
            ],
            { cancelable: true }
          )
        }}>
          <LogoutContainer>
            <LogoutIcon />
            <LogoutText>Sair</LogoutText>
          </LogoutContainer>
        </TouchableWithoutFeedback>
      </DrawerItemsContainer>
    </ScrollView>
  )
}
