import React, { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'

import FullscreenBackgroundImage from '../../components/FullscreenBackgroundImage'
import AnimatedLogo from '../../components/AnimatedLogo'

import {
  ContainerSafeArea, ContainerAvoidView, FormContainer, ScrollFormContainer,
  InputTitle, InputContainer, Input, PersonIcon, EnvelopeIcon, LockIcon,
  StyledIndicator, CreateAccountButton, CreateAccountButtonText,
  BackToLoginButton, BackToLoginButtonText, UserIcon
} from './styles'

export default function CreateAccount({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  handleAccountCreation = async () => {
    if (!name || !email || !password) return

    Keyboard.dismiss()

    setIsLoading(true)

    await sleep(2000)

    Alert.alert(
      'Sucesso!',
      'Sua conta foi criada, agora faça login para entrar no app.',
      [
        {
          text: 'Fazer login',
          onPress: () => navigation.navigate('Login')
        }
      ]
    )

    /*Alert.alert(
      'Ops...',
      'Falha na criação da conta, verifique seus dados e tente novamente!'
    )*/

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
