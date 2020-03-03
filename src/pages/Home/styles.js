import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const Content = styled.View`
  flex: 1;
`

export const StyledFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 10px;
`

export const StyledIndicator = styled.ActivityIndicator.attrs({
  color: 'rgb(199, 29, 125)',
  size: 'large'
})`
  flex: 1;
`
