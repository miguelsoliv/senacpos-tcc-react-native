import React, { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'
import { Buffer } from 'buffer'

import { AnimatedLogo, FullscreenBackgroundImage } from '../../components'

import { signin } from '../../services/api'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'
import storage from '../../services/storage'

import {
  ContainerSafeArea, ContainerAvoidView, FormContainer, ScrollFormContainer,
  InputTitle, InputContainer, Input, EnvelopeIcon, LockIcon, LoginButton,
  LoginButtonText, StyledIndicator, NewAccountButton, NewAccountButtonText,
  ForgotPasswordButton, ForgotPasswordButtonText
} from './styles'

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputPasswordRef = useRef()

  handleLogin = async () => {
    if (!email || !password) return

    Keyboard.dismiss()

    setIsLoading(true)

    const response = await signin(email.trim(), password)

    setIsLoading(false)

    if (response.data.message) {
      Alert.alert('Ops...', HandleAPIErrorMessage(response.data.message))
      return
    }

    if (response.data.user.photo_url) {
      response.data.user.photo_url =
        Buffer.from(response.data.user.photo_url, 'base64')
    }

    console.log(response.data.user.photo_url)

    storage.setToken(response.data.token)
    storage.setUser(response.data.user)

    navigation.navigate('Home')
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
          <FullscreenBackgroundImage />

          <AnimatedLogo />

          <FormContainer>
            {
              isLoading ? (
                <StyledIndicator />
              ) : (
                  <ScrollFormContainer>
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
                        returnKeyType='done'
                        onSubmitEditing={handleLogin}
                      />
                      <LockIcon />
                    </InputContainer>

                    <LoginButton onPress={handleLogin}>
                      <LoginButtonText>LOGAR</LoginButtonText>
                    </LoginButton>

                    <NewAccountButton
                      onPress={() => navigation.navigate('CreateAccount')}
                    >
                      <NewAccountButtonText>
                        NÃO TENHO CONTA
                      </NewAccountButtonText>
                    </NewAccountButton>

                    <ForgotPasswordButton
                      onPress={() => navigation.navigate('ForgotPassword')}
                    >
                      <ForgotPasswordButtonText>
                        Esqueci minha senha
                      </ForgotPasswordButtonText>
                    </ForgotPasswordButton>
                  </ScrollFormContainer>
                )
            }
          </FormContainer>
        </ContainerSafeArea>
      </ContainerAvoidView>
    </TouchableWithoutFeedback>
  )
}
