import styled from 'styled-components'

export const ScrollContainer = styled.ScrollView``

export const HeaderBackground = styled.ImageBackground`
  width: 100%;
  padding: 48px 16px 16px 16px;
`

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40;
  border-width: 1.7;
  border-color: #333;
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
