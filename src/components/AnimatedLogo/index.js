import React, { useState, useEffect } from 'react'
import { Keyboard, Platform, Animated } from 'react-native'

import { LogoImage } from './styles'

export default function AnimatedLogo() {
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [imageOpacity] = useState(new Animated.Value(0))

  const keyboardListener = Platform.OS === 'ios' ?
    {
      show: 'keyboardWillShow',
      hide: 'keyboardWillHide'
    } : {
      show: 'keyboardDidShow',
      hide: 'keyboardDidHide'
    }

  useEffect(() => {
    Keyboard.addListener(keyboardListener.show, () => setKeyboardVisible(true))
    Keyboard.addListener(keyboardListener.hide, () => setKeyboardVisible(false))

    return () => {
      Keyboard.removeAllListeners(keyboardListener.show, () =>
        setKeyboardVisible(true)
      )
      Keyboard.removeAllListeners(keyboardListener.hide, () =>
        setKeyboardVisible(false)
      )
    }
  }, [])

  useEffect(() => {
    animatelogoImage()
  }, [keyboardVisible])

  animatelogoImage = () => {
    Animated.timing(imageOpacity, {
      toValue: keyboardVisible ? 0 : 1,
      duration: keyboardVisible ? 100 : 300,
      useNativeDriver: true
    }).start()
  }

  return (
    <LogoImage onLoad={animatelogoImage}
      style={{
        opacity: imageOpacity,
        transform: [
          {
            scale: imageOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0.15, 0.7]
            })
          }
        ]
      }}
    />
  )
}
