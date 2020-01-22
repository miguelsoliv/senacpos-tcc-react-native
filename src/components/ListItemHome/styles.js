import { Animated } from 'react-native'
import styled from 'styled-components'

export const AnimatedContainer = styled(Animated.View)`
  margin: 7px 4px 5px 4px;
  border-radius: 10px;
  border-width: 3px;
`

export const TouchableContainer = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #f0f0f0;
`

export const HeaderContainer = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`

export const ManicureImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1.5;
  border-color: #333;
  margin-right: 10px;
`

export const InfoHeaderContainer = styled.View``

export const ManicureName = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`

export const ManicurePrice = styled.Text`
  color: #333;
  font-style: italic;
`

export const Description = styled.Text`
  padding: 5px 15px 5px 15px;
  line-height: 18px;
`