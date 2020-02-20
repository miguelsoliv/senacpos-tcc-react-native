import React, { useState } from 'react'
import { Animated } from 'react-native'

import {
  Container, ServiceText, ServicePrice, StyledButton, ButtonText, ButtonTextAlt
} from './styles'

export default function ManicureServiceView({ serviceText, price }) {
  const [animateColor] = useState(new Animated.Value(0))
  const [animateText] = useState(new Animated.Value(0))
  const [animateHelper, setAnimateHelper] = useState(false)

  const AnimatedContainer = Animated.createAnimatedComponent(Container)
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(StyledButton)
  const AnimatedText = Animated.createAnimatedComponent(ButtonText)
  const AnimatedTextAlt = Animated.createAnimatedComponent(ButtonTextAlt)

  const interpolatedViewBorder = animateColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#2e7d3299', '#b71c1c99']
  })

  const interpolatedButtonColor = animateColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#b71c1c', '#2e7d32']
  })

  const interpolatedCheckText = animateText.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const interpolatedCrossText = animateText.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  })

  handleButtonPress = () => {
    Animated.parallel(
      Animated.timing(animateColor, {
        duration: 400,
        toValue: !animateHelper ? 1 : 0
      }).start(() => {
        setAnimateHelper(!animateHelper)
      }),

      Animated.timing(animateText, {
        duration: 200,
        toValue: !animateHelper ? 1 : 0
      }).start()
    )
  }

  return (
    <AnimatedContainer
      style={{
        borderTopColor: interpolatedViewBorder,
        borderBottomColor: interpolatedViewBorder
      }}>

      <ServiceText>
        {serviceText}
      </ServiceText>

      <ServicePrice>
        R$ {price}
      </ServicePrice>

      <AnimatedTouchableOpacity
        onPress={handleButtonPress}
        style={{ backgroundColor: interpolatedButtonColor }}>

        <AnimatedText style={{ opacity: interpolatedCheckText }}>
          ✔
        </AnimatedText>

        <AnimatedTextAlt
          style={{ opacity: interpolatedCrossText }}>
          ×
        </AnimatedTextAlt>
      </AnimatedTouchableOpacity>
    </AnimatedContainer>
  )
}
