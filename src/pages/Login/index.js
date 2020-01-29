import React, { useState, useEffect, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, ActivityIndicator, Animated,
  Dimensions
} from 'react-native'

import {
  ContainerSafeArea, ContainerAvoidView, LogoImage, BackgroundImageContainer,
  BackgroundImage, FormContainer, InputTitle, InputContainer, Input,
  EnvelopeIcon, LockIcon, StyledLoginButton, LoginButtonText, StyledIndicator,
  NewAccountButton, NewAccountButtonText, ForgotPasswordButton,
  ForgotPasswordButtonText
} from './styles'

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('email@email.com')
  const [password, setPassword] = useState('12345')

  const inputPasswordRef = useRef()

  const { width } = Dimensions.get('window')

  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [imageOpacity] = useState(new Animated.Value(0))

  const keyboardListener = Platform.OS === 'ios' ?
    {
      show: 'keyboardWillShow',
      hide: 'keyboardWillHide'
    } : {
      show: 'keyboardDidShow',
      hide: 'keyboardDidHide'
    }

  useEffect(() => {
    Keyboard.addListener(keyboardListener.show, () => setKeyboardVisible(true))
    Keyboard.addListener(keyboardListener.hide, () => setKeyboardVisible(false))

    return () => {
      Keyboard.removeAllListeners(keyboardListener.show, () =>
        setKeyboardVisible(true)
      )
      Keyboard.removeAllListeners(keyboardListener.hide, () =>
        setKeyboardVisible(false)
      )
    }
  }, [])

  useEffect(() => {
    animatelogoImage()
  }, [keyboardVisible])

  animatelogoImage = () => {
    Animated.timing(imageOpacity, {
      toValue: keyboardVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  handleLogin = () => {
    setIsLoading(true)

    setTimeout(() => {
      Keyboard.dismiss()

      navigation.navigate('Home')
    }, 1500)

    setIsLoading(false)
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <ContainerAvoidView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ContainerSafeArea>
          <BackgroundImageContainer>
            <BackgroundImage />
          </BackgroundImageContainer>

          <LogoImage onLoad={animatelogoImage}
            style={{
              width: width + (width / 6),
              opacity: imageOpacity,
              transform: [
                {
                  scale: imageOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.15, 0.7]
                  })
                }
              ]
            }} />

          <FormContainer style={{
            marginBottom: Platform.OS === 'android' ?
              keyboardVisible ? width / 3 : 0
              : 0
          }}>
            <InputTitle>USUÁRIO</InputTitle>
            <InputContainer>
              <Input
                blurOnSubmit={false}
                keyboardType='email-address'
                placeholder='Digite seu e-mail'
                onChangeText={text => setEmail(text)}
                value={email}
                returnKeyType='next'
                onSubmitEditing={() => inputPasswordRef.current.focus()}
              />
              <EnvelopeIcon />
            </InputContainer>

            <InputTitle>SENHA</InputTitle>
            <InputContainer>
              <Input
                secureTextEntry
                ref={inputPasswordRef}
                placeholder='Digite sua senha'
                onChangeText={text => setPassword(text)}
                value={password}
                returnKeyType='send'
                onSubmitEditing={handleLogin}
              />
              <LockIcon />
            </InputContainer>

            <StyledLoginButton onPress={handleLogin}>
              {
                isLoading ? (
                  <ActivityIndicator color="#FFF" size="small" />
                ) : (
                    <LoginButtonText>LOGAR</LoginButtonText>
                  )
              }
            </StyledLoginButton>

            <NewAccountButton
              onPress={() => navigation.navigate('CreateAccount')}
            >
              <NewAccountButtonText>NÃO TENHO CONTA</NewAccountButtonText>
            </NewAccountButton>

            <ForgotPasswordButton
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </FormContainer>
        </ContainerSafeArea>
      </ContainerAvoidView>
    </TouchableWithoutFeedback>
  )
}
