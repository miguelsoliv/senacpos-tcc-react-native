import { Animated } from 'react-native'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
  align-items: center;
  justify-content: center;
`

export const AnimatedImageContainer = styled(Animated.View)``

export const StyledImage = styled.Image`
  aspect-ratio: 0.9;
`
