import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const StyledIndicator = styled.ActivityIndicator.attrs({
  color: 'rgb(199, 29, 125)',
  size: 'large'
})`
  flex: 1;
`
