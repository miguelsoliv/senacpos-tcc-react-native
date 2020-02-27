import React, { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'

import { AnimatedLogo, FullscreenBackgroundImage } from '../../components'

import { forgotPassword } from '../../services/api'

import {
  ContainerSafeArea, ContainerAvoidView, FormContainer, InputTitle,
  InputContainer, Input, EnvelopeIcon, StyledIndicator, RecoverPasswordButton,
  RecoverPasswordButtonText, BackToLoginButton, BackToLoginButtonText
} from './styles'

export default function ForgotPassword({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const emailInputRef = useRef()

  handleForgotPass = async () => {
    if (!email) return

    Keyboard.dismiss()

    setIsLoading(true)

    const response = await forgotPassword(email.trim())

    setIsLoading(false)

    if (response.data.email) {
      Alert.alert(
        'Sucesso!',
        'Cheque seu e-mail para instruções de recuperação de senha.',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Login')
          }
        ]
      )
    } else {
      Alert.alert(
        'Ops...',
        HandleAPIErrorMessage(response.data.message),
        [
          {
            text: 'Ok',
            style: 'default',
            onPress: () => emailInputRef.current.focus()
          }
        ]
      )
    }
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
                  <>
                    <InputTitle>E-MAIL</InputTitle>
                    <InputContainer>
                      <Input
                        ref={emailInputRef}
                        keyboardType='email-address'
                        placeholder='Digite seu e-mail'
                        onChangeText={text => setEmail(text)}
                        value={email}
                        returnKeyType='done'
                        onSubmitEditing={handleForgotPass}
                      />
                      <EnvelopeIcon />
                    </InputContainer>

                    <RecoverPasswordButton onPress={handleForgotPass}>
                      <RecoverPasswordButtonText>
                        RECUPERAR SENHA
                      </RecoverPasswordButtonText>
                    </RecoverPasswordButton>

                    <BackToLoginButton
                      onPress={() => navigation.navigate('Login')}
                    >
                      <BackToLoginButtonText>
                        Voltar
                      </BackToLoginButtonText>
                    </BackToLoginButton>
                  </>
                )
            }
          </FormContainer>
        </ContainerSafeArea>
      </ContainerAvoidView>
    </TouchableWithoutFeedback>
  )
}
