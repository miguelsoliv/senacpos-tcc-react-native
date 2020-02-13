import React, { useState, useEffect } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'

import storage from '../../services/storage'
import { updateUser } from '../../services/api'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'

import {
  FullscreenBackgroundImage, HeaderNavigation, EditableTextInput
} from '../../components'

import {
  Container, ScrollFormContainer, OkButton, OkButtonText, StyledIndicator,
  PasswordsContainer
} from './styles'

export default function Profile({ navigation, isFocused }) {
  const [isLoading, setIsLoading] = useState(true)
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  useEffect(() => {
    if (isFocused) loadUserData()
    else setIsLoading(true)
  }, [isFocused])

  async function loadUserData() {
    const { _id, name, email } = JSON.parse(await storage.getUser())

    setId(_id)
    setName(name)
    setEmail(email)
    setPassword('')
    setConfPassword('')

    setIsLoading(false)
  }

  async function handleUserDataChange() {
    if (!name || !email) return

    if (password != confPassword) {
      Alert.alert('Ops...', 'Confirme corretamente sua senha.')
      return
    }

    setIsLoading(true)

    const token = await storage.getToken()

    try {
      const response = await updateUser(id, name, email, password, token)

      if (response.data.message) {
        Alert.alert('Ops...', HandleAPIErrorMessage(response.data.message))
        return
      }

      storage.setUser({
        _id: id,
        name,
        email
      })

      Alert.alert('Sucesso!',
        'Suas informações foram salvas com êxito.',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Home')
          }
        ])
    }
    catch (err) {
      Alert.alert('Ops...', err)
    }

    setIsLoading(false)
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <Container>
        <FullscreenBackgroundImage />

        <HeaderNavigation
          navigation={navigation}
          headerTitle={'PERFIL'}
        />

        {
          isLoading ? (
            <StyledIndicator />
          ) : (
              <ScrollFormContainer>
                <EditableTextInput
                  headerTitle={'Seu nome:'}
                  onChangeText={text => setName(text)}
                  value={name}
                />

                <EditableTextInput
                  headerTitle={'Seu email:'}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  keyboardType='email-address'
                />

                <PasswordsContainer>
                  <EditableTextInput
                    headerTitle={'Sua nova senha:'}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    fill
                    secureTextEntry
                  />

                  <EditableTextInput
                    headerTitle={'Confirme sua senha:'}
                    onChangeText={text => setConfPassword(text)}
                    value={confPassword}
                    fill
                    secureTextEntry
                  />
                </PasswordsContainer>

                <OkButton onPress={handleUserDataChange}>
                  <OkButtonText>Salvar</OkButtonText>
                </OkButton>
              </ScrollFormContainer>
            )
        }
      </Container>
    </TouchableWithoutFeedback>
  )
}
