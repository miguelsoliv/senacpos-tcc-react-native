import React, { useEffect } from 'react'

import { Container, StyledImage } from './styles'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignRoutes')
    }, 1250)
  }, [])

  return (
    <Container>
      <StyledImage resizeMode='contain' />
    </Container>
  )
}
