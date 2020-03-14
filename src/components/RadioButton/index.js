import React from 'react'
import { TouchableOpacity } from 'react-native'

import { RowContainer, OuterCircle, InnerCircle, RadioText } from './styles'

export default function RadioButton({ text, value, onValueChange }) {
  return (
    <TouchableOpacity onPress={() => !value && onValueChange()}>
      <RowContainer>
        <OuterCircle>
          {
            value && <InnerCircle />
          }
        </OuterCircle>

        <RadioText>{text}</RadioText>
      </RowContainer>
    </TouchableOpacity>
  )
}
