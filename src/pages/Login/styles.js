import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const BackgroundImageContainer = styled.View`
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: -20%;
  left: -45%;
  right: 0;
`

export const MainContainer = styled.View`
  flex: 1; 
  width: 85%;
  align-self: flex-end;
  margin-bottom: 20px;
`

export const LogoContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const StyledText = styled.Text`
  font-size: 17px;
  font-family: Woebegone DEMO Regular;
  margin: 0 0 0 15px;
`

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
  autoCapitalize: 'none'
})`
  width: 90%;
  background-color: rgb(199, 29, 125);
  padding: 15px 12px 15px 12px;
  border-radius: 6;
  color: white;
  margin: 0 15px 15px 15px;
`

export const StyledButton = styled.TouchableOpacity`
  align-self: center;
  background-color: rgb(199, 29, 125);
  width: 70%;
  border-radius: 6;
  border-width: 1.3;
  border-color: rgb(50, 50, 50);
  padding: 10px;
  margin-top: 10px;
`

export const ButtonText = styled.Text`
  font-size: 17px;
  font-family: Woebegone DEMO Regular;
  color: white;
  align-self: center;
`
