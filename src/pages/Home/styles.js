import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const BackgroundImageContainer = styled.View`
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: -8%;
  left: -45%;
  right: 0;
`

export const BackgroundImage = styled.Image`
  aspect-ratio: 0.3;
  opacity: 0.55;
`

export const HeaderContainer = styled.View`
  background-color: rgb(199, 29, 125);
  height: 50;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 18px;
  color: rgb(248, 228, 239);
  font-weight: bold;
`

export const Content = styled.View`
  flex: 1;
`
