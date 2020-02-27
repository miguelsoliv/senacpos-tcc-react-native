import React from 'react'

import {
  AnimatedContainer, TouchableContainer, HeaderContainer, ManicureImage,
  InfoHeaderContainer, ManicureName, Description
} from './styles'

export default function ListItemHome({ navigation, item, translateX }) {
  handleListItemPress = () => {
    navigation.navigate('ManicureDetails', {
      id: item.id,
      name: item.name
    })
  }

  return (
    <AnimatedContainer style={{ transform: [{ translateX }] }}>
      <TouchableContainer onPress={handleListItemPress}>
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
