import React, { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'

import FullscreenBackgroundImage from '../../components/FullscreenBackgroundImage'
import AnimatedLogo from '../../components/AnimatedLogo'

import {
  ContainerSafeArea, ContainerAvoidView, FormContainer, InputTitle,
  InputContainer, Input, EnvelopeIcon, StyledIndicator, RecoverPasswordButton,
  RecoverPasswordButtonText, BackToLoginButton, BackToLoginButtonText
} from './styles'

export default function ForgotPassword({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const emailInputRef = useRef()

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  handleLogin = async () => {
    if (!email) return

    Keyboard.dismiss()

    setIsLoading(true)

    await sleep(2000)

    Alert.alert(
      'Sucesso!',
      'Cheque seu e-mail para instruções de recuperação de senha!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login')
        }
      ]
    )

    /*Alert.alert(
      'Ops...',
      'Houve um erro ao tentar recuperar sua senha.',
      [
        {
          text: 'OK',
          style: 'default',
          onPress: () => emailInputRef.current.focus()
        }
      ]
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
                        onSubmitEditing={handleLogin}
                      />
                      <EnvelopeIcon />
                    </InputContainer>

                    <RecoverPasswordButton onPress={handleLogin}>
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
