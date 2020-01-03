import React, { useState } from 'react'
import {
  Image, Platform, Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import appLogo from '../../assets/logo.png'
import backgroundImage from '../../assets/esmalte.png'
import {
  Container, InfoContainer,
  BackgroundImageContainer,
  MainContainer, LogoContainer,
  StyledText, ButtonText, StyledButton,
  Input
} from './styles'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('email@email.com')
  const [password, setPassword] = useState('12345')

  return (
    <Container>
      <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <InfoContainer>

            <BackgroundImageContainer>
              <Image style={{
                aspectRatio: 0.3,
                opacity: 0.55
              }}
                resizeMode='contain'
                source={backgroundImage} />
            </BackgroundImageContainer>

            <MainContainer>

              <LogoContainer>
                <Image style={{ aspectRatio: 0.8 }}
                  resizeMode='contain'
                  source={appLogo}
                />
              </LogoContainer>

              <StyledText>LOGIN</StyledText>
              <Input
                value={email}
                onChangeText={(value) => setEmail(value)}
              />

              <StyledText>SENHA</StyledText>
              <Input
                value={password}
                onChangeText={(value) => setPassword(value)}
              />

              <StyledButton>
                <ButtonText>ENTRAR</ButtonText>
              </StyledButton>

            </MainContainer>
          </InfoContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  )
}
