import React, { useState, useRef } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'
import { Buffer } from 'buffer'

import {
  AnimatedLogo, FullscreenBackgroundImage, RadioButton, ProfileImage,
  ScheduleTable, EditableProfessionalService
} from '../../components'

import { createCustomerAccount, createProfessionalAccount } from '../../services/api'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'
import storage from '../../services/storage'

import {
  ContainerSafeArea, ContainerAvoidView, FormContainer, ScrollFormContainer,
  InputTitle, InputContainer, Input, UserIcon, EnvelopeIcon, LockIcon,
  RadioButtonsContainer, ProfilePictureText, CreateAccountButton,
  CreateAccountButtonText, BackToLoginButton, BackToLoginButtonText,
  StyledIndicator
} from './styles'

export default function CreateAccount({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [photoUrl, setPhotoUrl] = useState('')
  const [services, setServices] = useState({
    names: ['Mãos', 'Pés'],
    prices: [0, 0]
  })
  const [schedule, setSchedule] = useState({
    days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    hours: ['8:00-12:00', '8:00-12:00;14:00-16:00', '8:00-11:30;13-18:30', '10:00-12:00;14:00-17:00', '16:00-18:00', '10:00-12:00;14:00-16:30', '']
  })

  const [customerRadioButton, setCustomerRadioButton] = useState(true)
  const [professionalRadioButton, setProfessionalRadioButton] = useState(false)

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  handleAccountCreation = async () => {
    if (!name || !email || !password) return

    if (professionalRadioButton) {
      if (!photoUrl) return

      let counter = 0
      services.prices.forEach((price) => {
        if (price > 0) counter++
      })

      if (counter == 0) return

      counter = 0
      schedule.hours.forEach((hour) => {
        if (hour) counter++
      })

      if (counter == 0) return
    }

    Keyboard.dismiss()

    setIsLoading(true)

    let response = ''

    if (customerRadioButton) {
      response =
        await createCustomerAccount(name.trim(), email.trim(), password)
    } else {
      response =
        await createProfessionalAccount(name.trim(), email.trim(), password,
          Buffer.from(photoUrl, 'base64'), services, schedule)
    }

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

  handleServicePriceChange = (index, value) => {
    const updatedServices = { ...services }
    updatedServices.prices[index] = Number(value)

    setServices(updatedServices)
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

                    <RadioButtonsContainer>
                      <RadioButton
                        text={'CLIENTE'}
                        value={customerRadioButton}
                        onValueChange={() => {
                          setCustomerRadioButton(!customerRadioButton)
                          setProfessionalRadioButton(!professionalRadioButton)
                        }}
                      />

                      <RadioButton
                        text={'PROFISSIONAL'}
                        value={professionalRadioButton}
                        onValueChange={() => {
                          setCustomerRadioButton(!customerRadioButton)
                          setProfessionalRadioButton(!professionalRadioButton)
                        }}
                      />
                    </RadioButtonsContainer>

                    {
                      professionalRadioButton && (
                        <>
                          <ProfilePictureText>
                            SELECIONE UMA FOTO DE PERFIL:
                          </ProfilePictureText>

                          <ProfileImage
                            onImageSelected={(newPhoto) =>
                              setPhotoUrl(newPhoto)}
                            photoUrl={photoUrl}
                          />

                          {
                            services.names.map((serviceName, index) => {
                              return (
                                <EditableProfessionalService
                                  key={index}
                                  serviceText={serviceName}
                                  price={services.prices[index]}
                                  onPriceChange={(value) =>
                                    handleServicePriceChange(index, value)
                                  }
                                />
                              )
                            })
                          }

                          <ScheduleTable />
                        </>
                      )
                    }

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
