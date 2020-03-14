import React, { useState, useRef } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import formatCurrency from '../../utils/formatCurrency'

import {
  Container, ServiceText, ServicePriceInput, SquareEditContainer, EditIcon
} from './styles'

export default function EditableProfessionalService({
  serviceText, price, onPriceChange
}) {
  const [text, setText] = useState(`${price}`)
  const [formatableText, setFormatableText] =
    useState(`${formatCurrency(Number(price))}`)

  const inputPriceRef = useRef()

  handleTextChange = (value) => {
    let price = value.replace(',', '.')
    if (!price) price = 0

    setText(price)
    setFormatableText(price)
    onPriceChange(price)
  }

  handleFocus = () => {
    let price = text.replace(',', '.')
    if (!price) price = 0

    setFormatableText(`${price}`)
  }

  handleBlur = () => {
    if (!text) {
      setText('0')
      setFormatableText(formatCurrency(0))
      return
    }

    let price = text.replace(',', '.')
    if (!price) price = 0

    setFormatableText(formatCurrency(Number(price)))
  }

  return (
    <TouchableWithoutFeedback onPress={() => inputPriceRef.current.focus()}>
      <Container>
        <ServiceText>{serviceText}</ServiceText>

        <ServicePriceInput
          ref={inputPriceRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={formatableText}
          onChangeText={handleTextChange}
        />

        <SquareEditContainer>
          <EditIcon />
        </SquareEditContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}
