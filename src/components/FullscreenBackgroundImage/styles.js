import { Dimensions } from 'react-native'
import { Animated } from 'react-native'

import backgroundImage from '../../assets/esmalte.png'

import styled from 'styled-components'

export const BackgroundImageContainer = styled.View`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  position: absolute;
  left: 0;
  top: 0;
`

export const AnimatedBackgroundImage = styled(Animated.Image).attrs({
  source: backgroundImage
})`
  flex: 1;
  aspect-ratio: 0.55;
  top: 3%;
  right: 45%;
`
