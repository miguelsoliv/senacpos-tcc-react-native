import Icon from 'react-native-vector-icons/MaterialIcons'

import headerBackground from '../../assets/headerBackground.jpg'

import styled from 'styled-components'

export const HeaderBackground = styled.ImageBackground.attrs({
  source: headerBackground
})`
  width: 100%;
  padding: 48px 16px 16px 16px;
`

export const InitialLetterContainer = styled.View`
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: rgba(60, 60, 60, 0.05);
  border-radius: 40;
  border-width: 2;
  border-color: #333;
`

export const InitialLetterText = styled.Text`
  text-align: center;
  font-size: 46px;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-offset: 2px 3px;
  text-shadow-radius: 10;
`

export const ProfileName = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: 800;
  margin: 8px 0 8px 0;
`

export const DrawerItemsContainer = styled.View.attrs({
  forceInset: {
    top: 'always',
    horizontal: 'never'
  }
})`
  flex: 1;
`

export const Divider = styled.View`
  align-self: center;
  width: 75%;
  height: 0.5px;
  background-color: black;
  margin: 6px 0 6px 0;
`

export const LogoutContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 0 0 16px;
`

export const LogoutIcon = styled(Icon).attrs({
  name: 'exit-to-app'
})`
  color: grey;
  font-size: 24px;
`

export const LogoutText = styled.Text`
  margin-left: 32px;
  font-weight: bold;
  color: #111;
`
