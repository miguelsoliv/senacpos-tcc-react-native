import appLogo from '../../assets/logo.png'

import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background-color: rgb(248, 228, 239);
  align-items: center;
  justify-content: center;
`

export const StyledImage = styled.Image.attrs({
  source: appLogo
})`
  aspect-ratio: 0.9;
`
