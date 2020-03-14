import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  margin: 12px 0 2px 0;
`

export const ImageContainer = styled.View`
  border-width: 2px;
  border-radius: 12px;
`

export const StyledImage = styled.Image`
  width: 180px;
  height: 120px;
  border-radius: 9px;
`

export const RoundedViewContainer = styled.View`
  align-self: center;
  right: 12%;
  top: 9%;
`

export const RoundedView = styled.View`
  position: absolute;
  justify-content: center;
  border-radius: 40px;
  padding: 5px;
  background-color: rgb(199, 29, 125);
`

export const EditIcon = styled(Icon).attrs({
  name: 'edit'
})`
  color: rgb(248, 228, 239);
  font-size: 20px;
`
