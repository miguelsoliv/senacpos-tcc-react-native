import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  width: 86%;
  height: 60px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: rgb(199, 29, 125);
  margin-top: 14px;
  border-width: 1.5px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const HeaderText = styled.Text`
  font-size: 16px;
  color: white;
`

export const TableContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 86%;
  align-self: center;
`

export const TableWeekdayContainer = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 0;
  border-bottom-width: 1.5px;
  border-right-width: 1.5px;
  border-left-width: 1.5px;
`

export const TableWeekdayText = styled.Text`
  font-size: 16px;
`

export const TouchableHoursInterval = styled.TouchableWithoutFeedback`
  flex: 1;
`

export const HoursIntervalContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1.5px;
  border-right-width: 1.5px;
`

export const HoursIntervalFillView = styled.View`
  flex: 1;
`

export const HoursIntervalText = styled.Text`
  font-size: 16px;
  text-align: center;
`

export const SquareEditContainer = styled.View`
  justify-content: center;
  margin-right: 4px;
  border-radius: 7px;
  padding: 5px;
  background-color: rgb(199, 29, 125);
`

export const EditIcon = styled(Icon).attrs({
  name: 'edit'
})`
  font-size: 16px;
  color: white;
`
