import React from 'react'

import {
  AnimatedContainer, TouchableContainer, HeaderContainer, ProfessionalImage,
  InfoHeaderContainer, ProfessionalName, Description
} from './styles'

export default function ListItemHome({ navigation, item, translateX }) {
  handleListItemPress = () => {
    navigation.navigate('ProfessionalDetails', {
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
          <ProfessionalImage source={{ uri: item.photo_url }} />

          <InfoHeaderContainer>
            <ProfessionalName>{item.name}</ProfessionalName>
            <Description>{item.schedule.days}</Description>
          </InfoHeaderContainer>

        </HeaderContainer>
      </TouchableContainer>
    </AnimatedContainer>
  )
}
