import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 8px;
  padding: 20px 0 20px 0;
  background-color: rgba(255, 255, 255, 0.55);
  border-width: 2px;
  border-left-width: 0;
  border-right-width: 0;
`

export const ServiceText = styled.Text`
  flex: 1;
  padding-left: 5%;
  font-size: 16px;
`

export const ServicePriceInput = styled.TextInput.attrs({
  keyboardType: 'numeric'
})`
  flex: 1;
`

export const SquareEditContainer = styled.View`
  justify-content: center;
  border-radius: 7px;
  margin-right: 5%;
  padding: 5px;
  background-color: rgb(199, 29, 125);
`

export const EditIcon = styled(Icon).attrs({
  name: 'edit'
})`
  color: rgb(248, 228, 239);
  font-size: 20px;
`
