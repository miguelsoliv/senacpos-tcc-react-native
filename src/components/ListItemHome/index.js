import React from 'react'
import { View } from 'react-native'
import {
  AnimatedContainer, TouchableContainer, HeaderContainer, ManicureImage,
  InfoHeaderContainer, ManicureName, ManicurePrice, Description
} from './styles'

export default function ListItemHome({ item, translateX }) {
  return (
    <AnimatedContainer style={{ transform: [{ translateX }] }}>
      <TouchableContainer onPress={() => console.log(`Name: ${item.name}`)}>
        <HeaderContainer>
          <ManicureImage source={item.photo} />

          <InfoHeaderContainer>
            <ManicureName>{item.name}</ManicureName>
            <ManicurePrice>R$35,00+</ManicurePrice>
          </InfoHeaderContainer>
        </HeaderContainer>

        <Description>{item.description}</Description>
      </TouchableContainer>
    </AnimatedContainer>
  )
}
