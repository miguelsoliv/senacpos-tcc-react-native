import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components'

export const HeaderContainer = styled.View`
  background-color: rgb(199, 29, 125);
  height: 50;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const HeaderIconMenu = styled(Icon).attrs({
  name: 'menu'
})`
  color: rgb(248, 228, 239);
  font-size: 30px;
  margin-left: 6px;
`

export const HeaderTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 18px;
  color: rgb(248, 228, 239);
  font-weight: bold;
`
