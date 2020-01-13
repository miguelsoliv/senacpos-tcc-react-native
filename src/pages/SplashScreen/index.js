import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import appLogo from '../../assets/logo.png'
import { Container, AnimatedImageContainer, StyledImage } from './styles'

export default function SplashScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(fadeAnim,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true
      },
    ).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim,
          {
            toValue: 0,
            duration: 700,
            useNativeDriver: true
          }
        ).start(() => navigation.navigate('LoginScreen'))
      }, 1250)
    })
  }, [])

  return (
    <Container>
      <AnimatedImageContainer style={{ opacity: fadeAnim }}>
        <StyledImage source={appLogo} resizeMode='contain' />
      </AnimatedImageContainer>
    </Container>
  )
}
