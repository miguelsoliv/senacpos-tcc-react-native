import React, { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'

import FullscreenBackgroundImage from '../../components/FullscreenBackgroundImage'
import AnimatedLogo from '../../components/AnimatedLogo'

import { createAccount } from '../../services/api'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'
import storage from '../../services/storage'

import {
  ContainerSafeArea, ContainerAvoidView, FormContainer, ScrollFormContainer,
  InputTitle, InputContainer, Input, UserIcon, EnvelopeIcon, LockIcon,
  StyledIndicator, CreateAccountButton, CreateAccountButtonText,
  BackToLoginButton, BackToLoginButtonText
} from './styles'

export default function CreateAccount({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  handleAccountCreation = async () => {
    if (!name || !email || !password) return

    Keyboard.dismiss()

    setIsLoading(true)

    const response = await createAccount(name.trim(), email.trim(), password)

    setIsLoading(false)

    if (response.data.message) {
      Alert.alert('Ops...', HandleAPIErrorMessage(response.data.message))
      return
    }

    storage.setToken(response.data.token)
    storage.setUser(response.data.user)

    Alert.alert(
      'Bem-vindo(a)!',
      'Sua conta foi criada com sucesso.',
      [
        {
          text: 'Entrar',
          onPress: () => navigation.navigate('Home')
        }
      ]
    )
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
                    <InputTitle>NOME</InputTitle>
                    <InputContainer>
                      <Input
                        blurOnSubmit={false}
                        placeholder='Digite seu nome'
                        onChangeText={text => setName(text)}
                        value={name}
                        returnKeyType='next'
                        onSubmitEditing={() => inputEmailRef.current.focus()}
                      />
                      <UserIcon />
                    </InputContainer>

                    <InputTitle>E-MAIL</InputTitle>
                    <InputContainer>
                      <Input
                        blurOnSubmit={false}
                        keyboardType='email-address'
                        ref={inputEmailRef}
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
                        onSubmitEditing={handleAccountCreation}
                      />
                      <LockIcon />
                    </InputContainer>

                    <CreateAccountButton
                      onPress={handleAccountCreation}
                    >
                      <CreateAccountButtonText>
                        CRIAR CONTA
                      </CreateAccountButtonText>
                    </CreateAccountButton>

                    <BackToLoginButton
                      onPress={() => navigation.navigate('Login')}
                    >
                      <BackToLoginButtonText>
                        Voltar
                      </BackToLoginButtonText>
                    </BackToLoginButton>
                  </ScrollFormContainer>
                )
            }
          </FormContainer>
        </ContainerSafeArea>
      </ContainerAvoidView>
    </TouchableWithoutFeedback>
  )
}
