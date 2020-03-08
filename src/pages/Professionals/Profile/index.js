import React, { useState, useEffect } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert
} from 'react-native'

import storage from '../../../services/storage'
import { updateClient } from '../../../services/api'
import HandleAPIErrorMessage from '../../../utils/handleAPIErrorMessage'

import { createStyledHeader } from '../../../utils/createStyledHeader'

import { FullscreenBackgroundImage, EditableTextInput } from '../../../components'

import {
  Container, ScrollFormContainer, OkButton, OkButtonText, StyledIndicator,
  PasswordsContainer
} from './styles'

export default function Profile({ navigation, isFocused }) {
  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [originalUsername, setOriginalUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [originalEmail, setOriginalEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [confUserPassword, setConfUserPassword] = useState('')

  useEffect(() => {
    if (isFocused) loadUserData()
    else setIsLoading(true)
  }, [isFocused])

  async function loadUserData() {
    const { _id, name, email } = JSON.parse(await storage.getUser())

    setUserId(_id)
    setUsername(name)
    setUserEmail(email)
    setUserPassword('')
    setConfUserPassword('')

    setOriginalUsername(name)
    setOriginalEmail(email)

    setIsLoading(false)
  }

  async function handleUserDataChange() {
    if (!username || !userEmail) return

    if (userPassword != confUserPassword) {
      Alert.alert('Ops...', 'Confirme corretamente sua senha.')
      return
    }

    const updatedData = {}

    if (username != originalUsername) updatedData.name = username
    if (userEmail != originalEmail) updatedData.email = userEmail
    if (userPassword) updatedData.password = userPassword

    if (Object.keys(updatedData).length == 0) return

    setIsLoading(true)

    const token = await storage.getToken()

    try {
      const response = await updateClient(userId, updatedData, token)

      if (response.data.message) {
        Alert.alert('Ops...', HandleAPIErrorMessage(response.data.message))
        return
      }

      storage.setUser({
        _id: userId,
        name: username,
        email: userEmail
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
        {
          isLoading ? (
            <StyledIndicator />
          ) : (
              <ScrollFormContainer>
                <EditableTextInput
                  headerTitle={'Seu nome:'}
                  onChangeText={text => setUsername(text)}
                  value={username}
                />

                <EditableTextInput
                  headerTitle={'Seu email:'}
                  onChangeText={text => setUserEmail(text)}
                  value={userEmail}
                  keyboardType='email-address'
                />

                <PasswordsContainer>
                  <EditableTextInput
                    headerTitle={'Sua nova senha:'}
                    onChangeText={text => setUserPassword(text)}
                    value={userPassword}
                    fill
                    secureTextEntry
                  />

                  <EditableTextInput
                    headerTitle={'Confirme sua senha:'}
                    onChangeText={text => setConfUserPassword(text)}
                    value={confUserPassword}
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

createStyledHeader(Profile, 'Perfil')
