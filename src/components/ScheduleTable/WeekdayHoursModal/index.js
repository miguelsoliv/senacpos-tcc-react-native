import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import RNPickerSelect from 'react-native-picker-select'

import RemovableHourIntervalItem from '../RemovableHourIntervalItem'

import {
  Container, Content, HeaderContainer, HeaderTitle, PickersRowContainer,
  PickerContainer, TouchableCheckIcon, CheckIcon
} from './styles'

export default function WeekdayHoursModal({
  visibility, onClose, day, intervals, onIntervalChanged, minHourToDelete,
  maxHourToDelete
}) {
  const [firstSelectedHour, setFirstSelectedHour] = useState()
  const [finalSelectedHour, setFinalSelectedHour] = useState()
  const [firstSelectedMinute, setFirstSelectedMinute] = useState()
  const [finalSelectedMinute, setFinalSelectedMinute] = useState()

  const [pickerFirstHourItems, setPickerFirstHourItems] = useState([])
  const [pickerFinalHourItems, setPickerFinalHourItems] = useState([])
  const pickerMinutesItems = [
    { label: '00min', value: '00' }, { label: '15min', value: '15' },
    { label: '30min', value: '30' }, { label: '45min', value: '45' }
  ]

  useEffect(() => {
    if (!visibility) {
      clearPickers()
    } else {
      console.log(minHourToDelete)
      console.log(maxHourToDelete)
      updateFirstHourPicker()
    }
  }, [visibility])

  useEffect(() => {
    updateFirstHourPicker()
  }, [maxHourToDelete])

  handleAddInterval = () => {
    if (!firstSelectedHour || !finalSelectedHour || !firstSelectedMinute ||
      !finalSelectedMinute) return

    const newHoursIntervalArray = [...intervals]
    newHoursIntervalArray.push(
      `${firstSelectedHour}:${firstSelectedMinute}-${finalSelectedHour}:${
      finalSelectedMinute}`
    )

    onIntervalChanged(newHoursIntervalArray)
    clearPickers()
  }

  handleIntervalRemoved = (item) => {
    const newHoursIntervalArray = [...intervals]
    newHoursIntervalArray.splice(newHoursIntervalArray.indexOf(item), 1)

    onIntervalChanged(newHoursIntervalArray)
  }

  handleFirstHourPickerChange = (value) => {
    if (!value) return

    const indexToBeSkipped = pickerFirstHourItems.findIndex(
      obj => obj.value === value)

    const items = pickerFirstHourItems.filter((hourObject, index) => {
      if (index > indexToBeSkipped) return hourObject
    })

    setFirstSelectedHour(value)
    setPickerFinalHourItems(items)
  }

  updateFirstHourPicker = () => {
    if (maxHourToDelete > 0) {
      const items = pickerFirstHourItems.filter((hourObject) => {
        if (hourObject.value < minHourToDelete ||
          hourObject.value > maxHourToDelete) return hourObject
      })

      setPickerFirstHourItems(items)
    }
  }

  clearPickers = () => {
    setFirstSelectedHour(null)
    setFinalSelectedHour(null)
    setFirstSelectedMinute(null)
    setFinalSelectedMinute(null)

    setPickerFirstHourItems([
      { label: '7h', value: '07' }, { label: '8h', value: '08' },
      { label: '9h', value: '09' }, { label: '10h', value: '10' },
      { label: '11h', value: '11' }, { label: '12h', value: '12' },
      { label: '13h', value: '13' }, { label: '14h', value: '14' },
      { label: '15h', value: '15' }, { label: '16h', value: '16' },
      { label: '17h', value: '17' }, { label: '18h', value: '18' },
      { label: '19h', value: '19' }, { label: '20h', value: '20' },
      { label: '21h', value: '21' }
    ])
  }

  return (
    <Modal
      isVisible={visibility}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <Container>
        <Content>
          <HeaderContainer>
            <HeaderTitle>{day}</HeaderTitle>
          </HeaderContainer>

          {
            intervals.map((interval, index) => {
              return (
                <RemovableHourIntervalItem
                  key={index}
                  item={interval}
                  index={index}
                  onItemRemoved={handleIntervalRemoved}
                  addBottomBorder={
                    index == intervals.length ? false : true
                  }
                />
              )
            })
          }

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <PickersRowContainer>
                <PickerContainer>
                  <RNPickerSelect
                    placeholderTextColor={'white'}
                    placeholder={{
                      label: 'Hora inicial',
                      value: null,
                      color: 'gray'
                    }}
                    doneText={'Ok'}
                    onValueChange={(value) =>
                      handleFirstHourPickerChange(value)}
                    items={pickerFirstHourItems}
                    value={firstSelectedHour}
                  />
                </PickerContainer>

                <PickerContainer>
                  <RNPickerSelect
                    placeholderTextColor={'white'}
                    placeholder={{
                      label: 'Minutos iniciais',
                      value: null,
                      color: 'gray'
                    }}
                    doneText={'Ok'}
                    onValueChange={(value) => setFirstSelectedMinute(value)}
                    items={pickerMinutesItems}
                    value={firstSelectedMinute}
                  />
                </PickerContainer>
              </PickersRowContainer>

              <PickersRowContainer>
                <PickerContainer>
                  <RNPickerSelect
                    placeholderTextColor={'white'}
                    placeholder={{
                      label: 'Hora final',
                      value: null,
                      color: 'gray'
                    }}
                    doneText={'Ok'}
                    onValueChange={(value) => setFinalSelectedHour(value)}
                    items={pickerFinalHourItems}
                    value={finalSelectedHour}
                  />
                </PickerContainer>

                <PickerContainer>
                  <RNPickerSelect
                    placeholderTextColor={'white'}
                    placeholder={{
                      label: 'Minutos finais',
                      value: null,
                      color: 'gray'
                    }}
                    doneText={'Ok'}
                    onValueChange={(value) => setFinalSelectedMinute(value)}
                    items={pickerMinutesItems}
                    value={finalSelectedMinute}
                  />
                </PickerContainer>
              </PickersRowContainer>
            </View>

            <TouchableCheckIcon onPress={handleAddInterval}>
              <CheckIcon />
            </TouchableCheckIcon>
          </View>
        </Content>
      </Container>
    </Modal>
  )
}
