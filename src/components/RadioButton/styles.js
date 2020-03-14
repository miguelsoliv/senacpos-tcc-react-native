import styled from 'styled-components/native'

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0 10px 0;
`

export const OuterCircle = styled.View`
  height: 28px;
  width: 28px;
  border-radius: 14px;
  border-width: 2px;
  border-color: rgb(110, 5, 110);
  align-items: center;
  justify-content: center;
`

export const InnerCircle = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: rgb(110, 5, 110);
`

export const RadioText = styled.Text`
  font-size: 15px;
  margin-left: 6px;
  margin-bottom: 2px;
  font-weight: bold;
  text-shadow-color: #ccc;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 10px;
`
