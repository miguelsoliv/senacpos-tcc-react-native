import React from 'react'

import { HeaderContainer, HeaderIconMenu, HeaderTitle } from './styles'

export default function HeaderNavigation({ navigation, headerTitle }) {
  return (
    <HeaderContainer>
      <HeaderIconMenu onPress={() => navigation.toggleDrawer()} />

      <HeaderTitle>{headerTitle}</HeaderTitle>
    </HeaderContainer>
  )
}
