import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const SearchContainer = styled.View`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0 10px 0 10px;
  margin: 10px 4px 10px 4px;
  border-radius: 6px;
  align-items: center;
`

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#606060'
})`
  flex: 1;
`

export const SearchIcon = styled(Icon).attrs({
  name: 'search'
})`
  color: #606060;
  font-size: 24px;
`

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

export const Content = styled.View`
  flex: 1;
`
