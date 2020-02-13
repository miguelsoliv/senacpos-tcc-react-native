import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  align-items: center;
`

export const RowHeaderContent = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const HeaderTitle = styled.Text`
  font-size: 16px;
`

export const RowInputContent = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`

export const Input = styled.TextInput`
  width: 86%;
  padding: 10px ${width - (width / 1.08)}px 10px 10px;
  background-color: #fff;
  border-width: 2.5px;
  border-radius: 8px;
  border-color: rgb(60, 60, 60);
`

export const RoundedViewContainer = styled.View`
  align-self: center;
  right: ${width - (width / 1.06)}px;
`

export const RoundedView = styled.View`
  position: absolute;
  border-radius: 40px;
  padding: 5px;
  justify-content: center;
  background-color: rgb(199, 29, 125);
`

export const EditIcon = styled(Icon).attrs({
  name: 'edit'
})`
  color: rgb(248, 228, 239);
  font-size: 24px;
`
