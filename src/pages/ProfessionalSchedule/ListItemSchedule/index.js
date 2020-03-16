import React from 'react'
import moment from 'moment'

import formatCurrency from '../../../utils/formatCurrency'

import {
  AnimatedContainer, HeaderContainer, StyledIcon, ItemContainer, Content,
  StyledText, Description, TotalText
} from './styles'

export default function ListItemSchedule({ item, translateX }) {
  const markedDate = moment(item.marked_date)
  const formattedDate = markedDate.format('DD/MM')
  const formattedTime = markedDate.format('hh:mm')

  const weekdays = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
  ]

  return (
    <AnimatedContainer style={{ transform: [{ translateX }] }}>
      <ItemContainer>
        <Content>
          <HeaderContainer>
            <StyledIcon name={'event-available'} />
            <StyledText style={{ flex: 1 }}>
              {formattedDate} ({weekdays[markedDate.day()]})
            </StyledText>

            <StyledIcon name={'schedule'} />
            <StyledText>{formattedTime}</StyledText>
          </HeaderContainer>

          <StyledText>{item.username}</StyledText>
          <Description>{item.description}</Description>
          <TotalText>Total: {formatCurrency(item.total)}</TotalText>
        </Content>
      </ItemContainer>
    </AnimatedContainer>
  )
}
