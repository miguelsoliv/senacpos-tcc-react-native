import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import moment from 'moment'

import {
  FullscreenBackgroundImage, ManicureServiceView
} from '../../components'

import {
  createStyledHeaderWithBackButton
} from '../../utils/createStyledHeader'
import formatCurrency from '../../utils/formatCurrency'

import CalendarModal from './CalendarModal'

import {
  Container, DateTimeContainer, DateTimeButton, ButtonText, PickerContainer,
  BottomContainer, SelectedDateText, PricingContainer, TotalText, PriceText,
  ScheduleButton
} from './styles'

export default function ManicureDetails({ navigation }) {
  const [manicureId, setManicureId] = useState('')
  const [total, setTotal] = useState(0)
  const [calendarDate, setCalendarDate] = useState(
    moment.utc().utcOffset("-03:00").format('YYYY-MM-DD')
  )
  const [hour, setHour] = useState(null)
  const [calendarVisible, setCalendarVisible] = useState(false)

  const manicureHours = [
    { label: '16:00', value: '16:00' },
    { label: '16:15', value: '16:15' },
    { label: '16:30', value: '16:30' },
    { label: '16:45', value: '16:45' },
    { label: '17:00', value: '17:00' },
    { label: '17:15', value: '17:15' },
    { label: '17:30', value: '17:30' }
  ]

  useEffect(() => {
    setManicureId(navigation.getParam('id'))
  }, [])

  updateTotal = (price, sum = true) => {
    sum ? setTotal(total + price) : setTotal(total - price)
  }

  handleSchedule = () => {
    if (total == 0 || hour == null) return

    Alert.alert(
      'Confirmação',
      `Deseja agendar seu atendimento para ${moment(calendarDate, 'YYYY-MM-DD').format('DD/MM')} às ${hour}?`,
      [
        { text: 'Não' },
        {
          text: 'Sim',
          onPress: () => navigation.navigate('Home')
        }
      ]
    )
  }

  return (
    <Container>
      <FullscreenBackgroundImage />

      <ManicureServiceView
        serviceText={'Mãos'}
        price={10}
        toggle={updateTotal}
      />

      <ManicureServiceView
        serviceText={'Pés'}
        price={15}
        toggle={updateTotal}
      />

      <DateTimeContainer>
        <DateTimeButton onPress={() => setCalendarVisible(true)}>
          <ButtonText>Selecione a data do atendimento</ButtonText>
        </DateTimeButton>

        <SelectedDateText>
          Data selecionada: {moment(calendarDate, 'YYYY-MM-DD').format('DD/MM')}
        </SelectedDateText>

        <CalendarModal
          visibility={calendarVisible}
          onClose={() => setCalendarVisible(false)}
          onDaySelect={(date) => setCalendarDate(date.dateString)}
        />

        <PickerContainer>
          <RNPickerSelect
            placeholderTextColor={'white'}
            placeholder={{
              label: 'Selecione a hora do atendimento',
              value: null,
              color: 'gray'
            }}
            doneText={'Ok'}
            onValueChange={(value) => setHour(value)}
            items={manicureHours}
          />
        </PickerContainer>
      </DateTimeContainer>

      <BottomContainer>

        <PricingContainer>
          <TotalText>Total:</TotalText>

          <PriceText>{formatCurrency(total)}</PriceText>
        </PricingContainer>

        <ScheduleButton onPress={handleSchedule}>
          <ButtonText>Agendar</ButtonText>
        </ScheduleButton>
      </BottomContainer>
    </Container>
  )
}

createStyledHeaderWithBackButton(ManicureDetails)
