import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import ModalBox from '../../components/ModalBox'
import Icon from 'react-native-vector-icons/MaterialIcons'
import headerBackground from '../../assets/headerBackground.jpg'
import {
  ScrollContainer, HeaderBackground, DrawerItemsContainer,
  InitialLetterContainer, InitialLetterText, ProfileName, Divider,
  LogoutContainer, LogoutText, ModalContainerButtons, ModalButtonTouchable,
  ModalButtonText, ModalTitle, ModalMessage
} from './styles'

const teste = 'usuário 001'

export default function SidebarHeader(props) {
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <ScrollContainer>
      <HeaderBackground source={headerBackground}>
        <InitialLetterContainer>
          <InitialLetterText>{teste.toUpperCase().substr(0, 1)}</InitialLetterText>
        </InitialLetterContainer>
        <ProfileName>Bem-vindo(a) {teste}</ProfileName>
      </HeaderBackground>

      <DrawerItemsContainer>
        <DrawerNavigatorItems {...props} />
        <Divider />

        <TouchableWithoutFeedback onPress={() => setModalVisibility(true)}>
          <LogoutContainer>
            <Icon name='exit-to-app' size={24} color='grey' />
            <LogoutText>Sair</LogoutText>
          </LogoutContainer>
        </TouchableWithoutFeedback>
      </DrawerItemsContainer>

      <ModalBox
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(false)}
        onPressDimmedView={() => setModalVisibility(false)}
      >
        <ModalTitle>Sair</ModalTitle>
        <ModalMessage>Deseja sair da sua conta?</ModalMessage>

        <ModalContainerButtons>
          <ModalButtonTouchable
            onPress={() => setModalVisibility(false)}>
            <ModalButtonText>Não</ModalButtonText>
          </ModalButtonTouchable>

          <ModalButtonTouchable
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <ModalButtonText>Sim</ModalButtonText>
          </ModalButtonTouchable>

        </ModalContainerButtons>
      </ModalBox>
    </ScrollContainer >
  )
}
