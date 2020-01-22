import React from 'react'
import { Modal, TouchableWithoutFeedback } from 'react-native'
import { DimmedView, Container, ContentView } from './styles'

export default function ModalBox(props) {
  return (
    <Modal
      animationType='fade'
      onRequestClose={props.onRequestClose}
      transparent
      {...props}
    >
      <TouchableWithoutFeedback onPress={props.onPressDimmedView}>
        <DimmedView />
      </TouchableWithoutFeedback>

      <Container>
        <ContentView>
          {props.children}
        </ContentView>
      </Container>
    </Modal>
  )
}
