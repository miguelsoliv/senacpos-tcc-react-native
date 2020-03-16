import React from 'react'
import { Buffer } from 'buffer'

import {
  AnimatedContainer, TouchableContainer, ItemContainer, ProfessionalImage,
  InfoHeaderContainer, ProfessionalName
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
        <ItemContainer>
          <ProfessionalImage
            source={{
              uri: `data:image/jpeg;base64,${new Buffer(item.photo_url)
                .toString('base64')}`
            }} />

          <InfoHeaderContainer>
            <ProfessionalName>{item.name}</ProfessionalName>
          </InfoHeaderContainer>
        </ItemContainer>
      </TouchableContainer>
    </AnimatedContainer>
  )
}
