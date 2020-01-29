import React, { useEffect } from 'react'
import appLogo from '../../assets/logo.png'
import { Container, StyledImage } from './styles'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignRoutes')
    }, 1250)
  }, [])

  return (
    <Container>
      <StyledImage source={appLogo} resizeMode='contain' />
    </Container>
  )
}
