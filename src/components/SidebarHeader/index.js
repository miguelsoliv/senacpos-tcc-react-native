import React from 'react'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import headerBackground from '../../assets/headerBackground.jpg'
import {
  ScrollContainer, HeaderBackground, DrawerItemsContainer,
  InitialLetterContainer, InitialLetterText, ProfileName
} from './styles'

const teste = 'usuário'

export default SidebarHeader = (props) => (
  <ScrollContainer>
    <HeaderBackground source={headerBackground}>
      <InitialLetterContainer>
        <InitialLetterText>{teste.toUpperCase().substr(0, 1)}</InitialLetterText>
      </InitialLetterContainer>
      <ProfileName>Bem-vindo(a) usuário 001</ProfileName>
    </HeaderBackground>

    <DrawerItemsContainer>
      <DrawerNavigatorItems {...props} />
    </DrawerItemsContainer>
  </ScrollContainer>
)
