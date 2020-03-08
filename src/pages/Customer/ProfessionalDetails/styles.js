import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(248, 228, 239);
`

export const ContentContainer = styled.View`
  flex: 1;
`

export const DateTimeContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 6px;
`

export const DateTimeButton = styled.TouchableOpacity`
  width: 90%;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: rgb(150, 25, 130);
  border-radius: 6;
  margin-top: 20px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #eff0ed;
  font-weight: bold;
  letter-spacing: 2.5;
  text-align: center;
`

export const PickerContainer = styled.View`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgb(150, 25, 130);
  border-radius: 6;
  margin-top: 20px;
`

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

export const SelectedDateText = styled.Text`
  font-size: 15px;
  margin-top: 15px;
  font-weight: bold;
  letter-spacing: 0.5;
`

export const PricingContainer = styled.View`
  align-items: center;
`

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2;
`

export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5;
`

export const ScheduleButton = styled.TouchableOpacity`
  width: 70%;
  height: 42px;
  background-color: rgb(199, 29, 125);
  border-radius: 6;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

export const StyledIndicator = styled.ActivityIndicator.attrs({
  color: 'rgb(199, 29, 125)',
  size: 'large'
})`
  flex: 1;
`
