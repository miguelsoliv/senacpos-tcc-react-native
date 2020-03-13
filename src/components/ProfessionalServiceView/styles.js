import styled from 'styled-components'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 8px;
  padding: 10px 0 10px 0;
  background-color: rgba(255, 255, 255, 0.85);
  border-width: 2px;
  border-left-width: 0;
  border-right-width: 0;
`

export const ServiceText = styled.Text`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
`

export const ServicePrice = styled.Text`
  flex: 1;
  font-style: italic;
  font-size: 15px;
`

export const StyledButton = styled.TouchableOpacity`
  width: 30;
  height: 30;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 15;
`

export const ButtonText = styled.Text`
  margin-bottom: 2px;
  color: rgb(248, 228, 239);
`

export const ButtonTextAlt = styled.Text`
  font-size: 22px;
  position: absolute;
  bottom: 1.5%;
  color: rgb(248, 228, 239);
`
