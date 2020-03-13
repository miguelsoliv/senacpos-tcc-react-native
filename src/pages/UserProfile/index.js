import React, { useState, useEffect } from 'react'
import {
  TouchableWithoutFeedback, Keyboard, Platform, Alert,
} from 'react-native'
import { Buffer } from 'buffer'

import storage from '../../services/storage'
import { updateCustomer, updateProfessional } from '../../services/api'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'

import { createStyledHeader } from '../../utils/createStyledHeader'

import {
  FullscreenBackgroundImage, EditableTextInput, ScheduleTable,
  ProfessionalServiceView
} from '../../components'

import ProfileImage from '../../components/ProfileImage'

import {
  Container, ScrollFormContainer, OkButton, OkButtonText, StyledIndicator,
  PasswordsContainer
} from './styles'

export default function UserProfile({ navigation, isFocused }) {
  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [confUserPassword, setConfUserPassword] = useState('')
  const [originalValues] = useState({})

  const [photoUrl, setPhotoUrl] = useState()
  const [userServices, setUserServices] = useState()
  const [scheduleDays, setScheduleDays] = useState()
  const [scheduleHours, setScheduleHours] = useState()

  useEffect(() => {
    if (isFocused) loadUserData()
    else setIsLoading(true)
  }, [isFocused])

  loadUserData = async () => {
    const {
      _id, name, email, photo_url, services, schedule
    } = JSON.parse(await storage.getUser())

    setUserId(_id)
    setUsername(name)
    setUserEmail(email)
    setUserPassword('')
    setConfUserPassword('')

    originalValues.name = name
    originalValues.email = email

    if (services) {
      setPhotoUrl(new Buffer(photo_url).toString('base64'))
      setUserServices(services)
      setScheduleDays(schedule.days)
      setScheduleHours(schedule.hours)

      originalValues.photo_url = new Buffer(photo_url).toString('base64')
      originalValues.services = {
        names: services.names,
        prices: services.prices
      }
      originalValues.schedule = {
        days: schedule.days,
        hours: schedule.hours
      }
    }

    setIsLoading(false)
  }

  handleUserDataChange = async () => {
    if (!username || !userEmail) return

    if (userPassword != confUserPassword) {
      Alert.alert('Ops...', 'Confirme corretamente sua senha.')
      return
    }

    const updatedData = {}

    if (username != originalValues.name) updatedData.name = username
    if (userEmail != originalValues.email) updatedData.email = userEmail
    if (userPassword) updatedData.password = userPassword

    if (photoUrl != originalValues.photo_url) updatedData.photo_url = photoUrl

    if (userServices.prices != originalValues.services.prices) {
      updatedData.services = { prices: userServices.prices }
    }

    if (scheduleDays != originalValues.schedule.days) {
      updatedData.schedule = { days: servicesDays }
    }
    if (scheduleHours != originalValues.schedule.hours) {
      updatedData.schedule = { hours: servicesHours }
    }

    if (Object.keys(updatedData).length == 0) return

    setIsLoading(true)

    const token = await storage.getToken()

    try {
      const response = userServices ?
        await updateProfessional(userId, updatedData, token) :
        await updateCustomer(userId, updatedData, token)

      if (response.data.message) {
        Alert.alert('Ops...', HandleAPIErrorMessage(response.data.message))
        return
      }

      userServices ? storage.setUser({
        _id: userId,
        name: username,
        email: userEmail,
        photo_url,
        services,
        schedule: {
          days: scheduleDays,
          hours: scheduleHours
        }
      }) : storage.setUser({
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

  handleToggle = (index, _, price, checked) => {
    const updatedData = userServices

    updatedData.prices[index] = checked ? price : 0

    setUserServices({
      ...userServices,
      prices: updatedData.prices
    })
    console.log(userServices)
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
                {
                  userServices && (
                    <ProfileImage
                      onImageSelected={(newPhoto) => setPhotoUrl(newPhoto)}
                      photoUrl={photoUrl}
                    />
                  )
                }

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

                {
                  userServices && userServices.names.map((name, index) => {
                    return (
                      userServices.prices[index] > 0 &&
                      <ProfessionalServiceView
                        key={index}
                        serviceText={name}
                        price={userServices.prices[index]}
                        toggle={(serviceText, price, checked) =>
                          handleToggle(index, serviceText, price, checked)}
                      />
                    )
                  })
                }

                <ScheduleTable />

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

createStyledHeader(UserProfile, 'Perfil')
