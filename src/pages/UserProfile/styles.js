import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const ScrollFormContainer = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false
})``

export const PasswordsContainer = styled.View`
  flex-direction: row;
`

export const OkButton = styled.TouchableOpacity`
  height: 42px;
  align-self: center;
  background-color: rgb(199, 29, 125);
  width: 70%;
  border-radius: 6;
  justify-content: center;
  align-items: center;
  margin: 14px 0 10px 0;
`

export const OkButtonText = styled.Text`
  color: #eff0ed;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2.5px;
`

export const StyledIndicator = styled.ActivityIndicator.attrs({
  color: 'rgb(199, 29, 125)',
  size: 'large'
})`
  flex: 1;
`
