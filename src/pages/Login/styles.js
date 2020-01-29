import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import appLogo from '../../assets/logo.png'
import backgroundImage from '../../assets/esmalte.png'

import styled from 'styled-components'

export const ContainerAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`

export const ContainerSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
  align-items: center;
`

export const BackgroundImageContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export const BackgroundImage = styled.Image.attrs({
  source: backgroundImage
})`
  flex: 1;
  aspect-ratio: 0.6;
  opacity: 0.55;
  top: 2%;
  right: 47%;
`

export const LogoImage = styled(Animated.Image).attrs({
  source: appLogo
})`
  flex: 1;
  align-self: center;
  left: 7%;
`

export const FormContainer = styled.View`
  flex: 1;
  width: 80%;
  left: 8%;
  justify-content: flex-end;
`

export const InputTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: bold;
  text-shadow-color: #bbb;
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
  placeholderTextColor: '#bbb'
})`
  width: 90%;
  padding: 15px 4px 15px 12px;
  color: #fff;
`

export const EnvelopeIcon = styled(Icon).attrs({
  name: 'mail-outline'
})`
  color: #bbb;
  font-size: 20px;
  margin-right: 12px;
`

export const LockIcon = styled(Icon).attrs({
  name: 'lock-outline'
})`
  color: #bbb;
  font-size: 20px;
  margin-right: 12px;
`

export const StyledLoginButton = styled.TouchableOpacity`
  height: 42px;
  align-self: center;
  background-color: rgb(199, 29, 125);
  width: 70%;
  border-radius: 6;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const LoginButtonText = styled.Text`
  color: #eff0ed;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2.5px;
`

export const NewAccountButton = styled.TouchableOpacity`
  height: 42px;
  align-self: center;
  background-color: rgb(150, 25, 130);
  width: 70%;
  border-radius: 6;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const NewAccountButtonText = styled.Text`
  color: #eff0ed;
  font-size: 14.5px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin: 18px 0 25px 0;
  align-items: center;
`

export const ForgotPasswordButtonText = styled.Text`
  color: #888;
  font-size: 16px;
`

export const StyledIndicator = styled.ActivityIndicator.attrs({
  color: 'rgb(199, 29, 125)'
})`
  flex: 1;
  top: 5%;
`
