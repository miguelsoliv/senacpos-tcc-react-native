import React, { useEffect } from 'react'

import { validateToken } from '../../services/api'
import storage from '../../services/storage'

import { Container, StyledImage } from './styles'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    checkToken()
  }, [])

  checkToken = async () => {
    const token = await storage.getToken()

    if (token) {
      const response = await validateToken(token)

      if (response.data.message === 'Valid token') {
        navigation.navigate('Home')
        return
      } else {
        storage.setToken(null)
      }
    }

    navigation.navigate('SignRoutes')
  }

  return (
    <Container>
      <StyledImage resizeMode='contain' />
    </Container>
  )
}
