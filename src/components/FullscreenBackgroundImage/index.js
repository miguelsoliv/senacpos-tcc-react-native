import React, { useState } from 'react'
import { Animated } from 'react-native'

import { BackgroundImageContainer, AnimatedBackgroundImage } from './styles'

export default function FullscreenBackgroundImage() {
  const [imageOpacity] = useState(new Animated.Value(0))

  animateImage = () => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 1350,
      useNativeDriver: true
    }).start()
  }

  return (
    <BackgroundImageContainer>
      <AnimatedBackgroundImage
        onLoadEnd={animateImage}
        style={{
          opacity: imageOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.55]
          })
        }}
      />
    </BackgroundImageContainer>
  )
}
