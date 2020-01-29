import React from 'react'
import {
  AnimatedContainer, TouchableContainer, HeaderContainer, ManicureImage,
  InfoHeaderContainer, ManicureName, Description
} from './styles'

export default function ListItemHome({ item, translateX }) {
  return (
    <AnimatedContainer style={{ transform: [{ translateX }] }}>
      <TouchableContainer onPress={() => console.log(`Name: ${item.name}`)}>
        <HeaderContainer>
          <ManicureImage source={item.photo} />

          <InfoHeaderContainer>
            <ManicureName>{item.name}</ManicureName>
            <Description>{item.description}</Description>
          </InfoHeaderContainer>

        </HeaderContainer>
      </TouchableContainer>
    </AnimatedContainer>
  )
}
