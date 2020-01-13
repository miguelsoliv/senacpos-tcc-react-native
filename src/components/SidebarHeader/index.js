import React from 'react'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import headerBackground from '../../assets/headerBackground.jpg'
import profilePic from '../../assets/Ebichu.jpg'
import {
  ScrollContainer, HeaderBackground, DrawerItemsContainer, ProfileImage,
  ProfileName
} from './styles'

export default SidebarHeader = (props) => (
  <ScrollContainer>
    <HeaderBackground source={headerBackground}>
      <ProfileImage source={profilePic} />
      <ProfileName>Bem-vindo(a) usuário 001</ProfileName>
    </HeaderBackground>

    <DrawerItemsContainer>
      <DrawerNavigatorItems {...props} />
    </DrawerItemsContainer>
  </ScrollContainer>
)
