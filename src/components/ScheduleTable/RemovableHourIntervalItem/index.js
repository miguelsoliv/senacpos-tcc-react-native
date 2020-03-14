import React from 'react'

import {
  TouchableInterval, IntervalContainer, IntervalText, RemoveIcon
} from './styles'

export default function RemovableHourIntervalItem({
  item, index, addBottomBorder, onItemRemoved
}) {
  return (
    <TouchableInterval onPress={() => onItemRemoved(item)}>
      <IntervalContainer
        style={{
          borderTopWidth: index % 2 == 0 ? 1.5 : 0,
          borderBottomWidth: addBottomBorder && 1.5
        }}>
        <IntervalText>{item}</IntervalText>

        <RemoveIcon />
      </IntervalContainer>
    </TouchableInterval>
  )
}
