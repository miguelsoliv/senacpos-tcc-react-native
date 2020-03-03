import React from 'react'

import {
  AnimatedContainer, TouchableContainer, HeaderContainer, ManicureImage,
  InfoHeaderContainer, ManicureName, Description
} from './styles'

export default function ListItemHome({ navigation, item, translateX }) {
  handleListItemPress = () => {
    navigation.navigate('ManicureDetails', {
      _id: item._id,
      name: item.name,
      scheduleDays: item.schedule.days,
      scheduleHours: item.schedule.hours,
      servicesNames: item.services.names,
      servicesPrices: item.services.prices
    })
  }

  return (
    <AnimatedContainer style={{ transform: [{ translateX }] }}>
      <TouchableContainer onPress={handleListItemPress}>
        <HeaderContainer>
          <ManicureImage source={{ uri: item.photo_url }} />

          <InfoHeaderContainer>
            <ManicureName>{item.name}</ManicureName>
            <Description>{item.schedule.days}</Description>
          </InfoHeaderContainer>

        </HeaderContainer>
      </TouchableContainer>
    </AnimatedContainer>
  )
}
