import React, { useRef } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import {
  Container, RowHeaderContent, HeaderTitle, RowInputContent, Input,
  RoundedViewContainer, RoundedView, EditIcon
} from './styles'

export default function EditableTextInput({
  headerTitle, value, onChangeText, fill, secureTextEntry, keyboardType
}) {
  const inputRef = useRef()

  return (
    <Container style={{ flex: fill ? 1 : null }}>
      <RowHeaderContent>
        <HeaderTitle>{headerTitle}</HeaderTitle>
      </RowHeaderContent>

      <RowInputContent>
        <Input
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
        />

        <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
          <RoundedViewContainer>
            <RoundedView>
              <EditIcon />
            </RoundedView>
          </RoundedViewContainer>
        </TouchableWithoutFeedback>

      </RowInputContent>
    </Container>
  )
}
