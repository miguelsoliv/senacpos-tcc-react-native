import styled from 'styled-components'

export const ScrollContainer = styled.ScrollView``

export const HeaderBackground = styled.ImageBackground`
  width: 100%;
  padding: 48px 16px 16px 16px;
`

export const InitialLetterContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 40;
  border-width: 2;
  border-color: #333;
`

export const InitialLetterText = styled.Text`
  font-size: 46px;
  shadow-color: rgba(0, 0, 0, 0.75);
  shadow-offset: -1px 1px;
  shadow-radius: 10;
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
