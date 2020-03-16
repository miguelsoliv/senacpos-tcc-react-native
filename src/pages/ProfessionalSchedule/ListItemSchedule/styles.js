import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components'

export const AnimatedContainer = styled(Animated.View)`
  margin: 0 5px 5px 3px;
  border-radius: 6px;
  border-width: 1.5px;
  background-color: rgba(252, 242, 238, 0.85);
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 6px;
  align-items: center;
`

export const StyledIcon = styled(Icon).attrs(props => ({
  name: props.name
}))`
  margin-right: 4px;
  font-size: 18px;
`

export const ItemContainer = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  height: 100%;
  margin-left: 10px;
`

export const StyledText = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  margin: 4px 0 6px 0;
  line-height: 18px;
`

export const TotalText = styled.Text`
  align-self: flex-end;
  font-size: 16px;
  font-style: italic;
`
