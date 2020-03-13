import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 0.85;
  flex-direction: row;
  background-color: rgb(248, 228, 239);
  padding: 20px 10px 20px 10px;
`

export const Content = styled.View`
  flex: 1;
`

export const HeaderContainer = styled.View`
  flex: 0.25;
  align-items: center;
  justify-content: center;
  background-color: rgba(199, 29, 125, 0.65);
`

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: white;
`

export const PickersRowContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`

export const PickerContainer = styled.View`
  flex: 1;
  height: 47px;
  justify-content: center;
  background-color: rgba(150, 25, 130, 0.83);
  border-radius: 6;
  margin: 0 16px 0 6px;
`

export const TouchableCheckIcon = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  margin-right: 2%;
`

export const CheckIcon = styled(Icon).attrs({
  name: 'check-circle-outline'
})`
  font-size: 36px;
  color: green;
`
