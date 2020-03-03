import { Animated } from 'react-native'

import styled from 'styled-components'

export const AnimatedContainer = styled(Animated.View)`
  margin: 0 5px 5px 3px;
  border-radius: 6px;
  border-width: 1.5px;
`

export const TouchableContainer = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: rgba(252, 242, 238, 0.85);
`

export const HeaderContainer = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
`

export const ManicureImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 6px;
  border-width: 1;
  border-color: #333;
`

export const InfoHeaderContainer = styled.View`
  flex: 1;
  height: 100%;
  margin-left: 10px;
`

export const ManicureName = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  padding: 5px 0 5px 0;
  line-height: 18px;
`
