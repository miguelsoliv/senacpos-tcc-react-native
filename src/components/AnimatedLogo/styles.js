import { Animated, Dimensions } from 'react-native'

import appLogo from '../../assets/logo.png'

import styled from 'styled-components'

const { width } = Dimensions.get('window')

export const LogoImage = styled(Animated.Image).attrs({
  source: appLogo
})`
  flex: 1;
  width: ${width + (width / 6)};
  left: 7%;
`
