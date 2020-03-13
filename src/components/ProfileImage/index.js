import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import {
  Container, ImageContainer, StyledImage, RoundedViewContainer, RoundedView,
  EditIcon
} from './styles'

export default function ProfileImage({ photoUrl, onImageSelected }) {
  const options = {
    title: 'Selecione uma foto',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Tirar foto...',
    chooseFromLibraryButtonTitle: 'Escolher foto da galeria...',
    storageOptions: {
      skipBackup: true,
      path: 'ProfilePics'
    }
  }

  handlePicturePress = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (!response.error && !response.didCancel) {
        onImageSelected(response.data)
      }
    })
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handlePicturePress}>
        <ImageContainer>
          <StyledImage source={{ uri: `data:image/jpeg;base64,${photoUrl}` }} />
        </ImageContainer>
      </TouchableWithoutFeedback>

      <RoundedViewContainer>
        <TouchableWithoutFeedback onPress={handlePicturePress}>
          <RoundedView>
            <EditIcon />
          </RoundedView>
        </TouchableWithoutFeedback>
      </RoundedViewContainer>
    </Container>
  )
}
