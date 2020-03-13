import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styled from 'styled-components/native'

export const TouchableInterval = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
`

export const IntervalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const IntervalText = styled.Text`
  text-align: center;
  font-size: 16px;
`

export const RemoveIcon = styled(Icon).attrs({
  name: 'close-circle-outline'
})`
  position: absolute;
  left: 89%;
  margin-right: 6px;
  font-size: 36px;
  color: darkred;
`
