import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components'

export const ContainerAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`

export const ContainerSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
  align-items: center;
`

export const FormContainer = styled.View`
  flex: 1.5;
  width: 80%;
  left: 8%;
  justify-content: flex-end;
`

export const ScrollFormContainer = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false
})``

export const InputTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: bold;
  text-shadow-color: #ccc;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 10px;
`

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(199, 29, 125);
  border-radius: 6;
  margin-bottom: 15px;
`

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
  placeholderTextColor: '#ccc'
})`
  width: 90%;
  padding: 15px 4px 15px 12px;
  color: #fff;
`

export const UserIcon = styled(Icon).attrs({
  name: 'person-outline'
})`
  color: #ccc;
  font-size: 20px;
  margin-right: 12px;
`

export const EnvelopeIcon = styled(Icon).attrs({
  name: 'mail-outline'
})`
  color: #ccc;
  font-size: 20px;
  margin-right: 12px;
`

export const LockIcon = styled(Icon).attrs({
  name: 'lock-outline'
})`
  color: #ccc;
  font-size: 20px;
  margin-right: 12px;
`

export const CreateAccountButton = styled.TouchableOpacity`
  height: 42px;
  align-self: center;
  background-color: rgb(150, 25, 130);
  width: 70%;
  border-radius: 6;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const CreateAccountButtonText = styled.Text`
  color: #eff0ed;
  font-size: 14.5px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const BackToLoginButton = styled.TouchableOpacity`
  margin: 18px 0 25px 0;
  align-items: center;
`

export const BackToLoginButtonText = styled.Text`
  color: #888;
  font-size: 16px;
  text-shadow-color: #ddd;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 10px;
`

export const StyledIndicator = styled.ActivityIndicator.attrs({
  color: 'rgb(199, 29, 125)',
  size: 'large'
})`
  flex: 1;
`
