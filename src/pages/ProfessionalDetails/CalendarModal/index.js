import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import Modal from 'react-native-modal'
import moment from 'moment'

import { Container, CloseButtonText } from './styles'

export default function CalendarModal({
  visibility, onClose, onDaySelect, disabledDays
}) {
  LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Março', 'Abril', 'Maio', 'Jun', 'Jul',
      'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta',
      'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
  }
  LocaleConfig.defaultLocale = 'br'

  const selectedDateOptions = {
    selected: true, selectedColor: '#d81b60', disableTouchEvent: true
  }
  const disabledDateOptions = { disabled: true, disableTouchEvent: true }

  const [disableArrowLeft, setDisableArrowLeft] = useState(true)
  const [disableArrowRight, setDisableArrowRight] = useState(false)

  const minDate = moment().utc().utcOffset("-03:00")
  const maxDate = moment(minDate).add(3, 'M').endOf('month')

  const [currentDateMonth, setCurrentDateMonth] = useState(minDate)
  const [lastSelectedDate, setLastSelectedDate] = useState(null)

  const [markedDates, setMarkedDates] = useState({
    ...getDaysInMonth(minDate.month(), minDate.year(), disabledDays),
    [lastSelectedDate]: selectedDateOptions
  })

  function getDaysInMonth(month, year, days) {
    let pivot = moment().month(month).year(year).startOf('month')
    const end = moment().month(month).year(year).endOf('month')

    let dates = {}

    while (pivot.isBefore(end)) {
      days.forEach((day) => {
        dates[pivot.day(day).format('YYYY-MM-DD')] = disabledDateOptions
      })

      pivot.add(days.length, 'days')
    }

    return dates
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
        <Calendar
          onPressArrowLeft={(substractMonth) => {
            setCurrentDateMonth(
              moment(currentDateMonth).subtract(1, 'M')
            )

            if (currentDateMonth.month() - 1 == minDate.month()) {
              setDisableArrowLeft(true)
            } else {
              setDisableArrowLeft(false)
            }

            setDisableArrowRight(false)
            substractMonth()
          }}
          onPressArrowRight={(addMonth) => {
            setCurrentDateMonth(
              moment(currentDateMonth).add(1, 'M')
            )

            if (currentDateMonth.month() + 1 == maxDate.month()) {
              setDisableArrowRight(true)
            } else {
              setDisableArrowRight(false)
            }

            setDisableArrowLeft(false)
            addMonth()
          }}
          current={currentDateMonth.format('YYYY-MM-DD')}
          disableArrowLeft={disableArrowLeft}
          disableArrowRight={disableArrowRight}
          onDayPress={(date) => {
            onDaySelect(date)

            setMarkedDates({
              ...markedDates,
              [date.dateString]: selectedDateOptions,
              [lastSelectedDate]: undefined
            })

            setLastSelectedDate(date.dateString)
          }}
          onMonthChange={(date) => {
            setMarkedDates({
              ...getDaysInMonth(date.month - 1, date.year, disabledDays),
              [lastSelectedDate]: selectedDateOptions
            })
          }}
          minDate={minDate.format('YYYY-MM-DD')}
          maxDate={maxDate.format('YYYY-MM-DD')}
          markedDates={markedDates}
          hideExtraDays
          theme={{
            todayTextColor: '#333',
            arrowColor: '#d81b60'
          }}
        />

        <TouchableWithoutFeedback onPress={onClose}>
          <CloseButtonText>Fechar</CloseButtonText>
        </TouchableWithoutFeedback>
      </Container>
    </Modal>
  )
}
