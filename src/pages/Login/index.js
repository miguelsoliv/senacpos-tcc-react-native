import React, { useState, useEffect, useRef } from 'react'
import {
  Platform, Keyboard, TouchableWithoutFeedback, Animated
} from 'react-native'
import appLogo from '../../assets/logo.png'
import backgroundImage from '../../assets/esmalte.png'
import {
  Container, InfoContainer, ContainerAvoidView, BackgroundImageContainer,
  BackgroundImage, MainContainer, LogoContainer, LogoImage, StyledText,
  ButtonText, StyledButton, Input, StyledIndicator
} from './styles'

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('email@email.com')
  const [password, setPassword] = useState('12345')

  const inputPassword = useRef()
  const fadeAnim = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(fadeAnim,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true
      },
    ).start()
  }, [])

  handleLogin = () => {
    setIsLoading(true)

    if (true) {
      navigation.navigate('Home')
    }

    setIsLoading(false)
  }

  return (
    <Container>
      <ContainerAvoidView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <InfoContainer>

            <BackgroundImageContainer>
              <BackgroundImage
                resizeMode='contain'
                source={backgroundImage} />
            </BackgroundImageContainer>

            <MainContainer>

              <LogoContainer>
                <LogoImage
                  resizeMode='contain'
                  source={appLogo} />
              </LogoContainer>
              {
                isLoading
                  ?
                  <StyledIndicator size='large' color='rgb(199, 29, 125)' />
                  :
                  <>
                    <StyledText>USUÁRIO</StyledText>
                    <Input
                      value={email}
                      onChangeText={(value) => setEmail(value)}
                      returnKeyType='next'
                      onSubmitEditing={() => inputPassword.current.focus()}
                      keyboardType='email-address'
                      blurOnSubmit={false}
                    />

                    <StyledText>SENHA</StyledText>
                    <Input
                      value={password}
                      onChangeText={(value) => setPassword(value)}
                      returnKeyType='go'
                      onSubmitEditing={() => handleLogin()}
                      secureTextEntry
                      ref={inputPassword}
                    />

                    <StyledButton onPress={() => handleLogin()}>
                      <ButtonText>Login</ButtonText>
                    </StyledButton>
                  </>
              }
            </MainContainer>
          </InfoContainer>
        </TouchableWithoutFeedback>
      </ContainerAvoidView>
    </Container>
  )
}
