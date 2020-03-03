import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import moment from 'moment'

import {
  FullscreenBackgroundImage, ManicureServiceView
} from '../../components'

import { addScheduledHour, listManicureSchedule } from '../../services/api'
import storage from '../../services/storage'

import {
  createStyledHeaderWithBackButton
} from '../../utils/createStyledHeader'
import formatCurrency from '../../utils/formatCurrency'
import { changeDayNames, getDisabledDays } from '../../utils/handleDaysArray'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'

import CalendarModal from './CalendarModal'

import {
  Container, ContentContainer, DateTimeContainer, DateTimeButton, ButtonText,
  PickerContainer, BottomContainer, SelectedDateText, PricingContainer,
  TotalText, PriceText, ScheduleButton, StyledIndicator
} from './styles'

export default function ManicureDetails({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [description, setDescription] = useState({})
  const [calendarDate, setCalendarDate] = useState(null)
  const [hour, setHour] = useState(null)
  const [calendarVisible, setCalendarVisible] = useState(false)

  const servicesNames = navigation.getParam('servicesNames')
  const servicesPrices = navigation.getParam('servicesPrices')
  const scheduleDays = changeDayNames(navigation.getParam('scheduleDays'))
  const disabledDays = getDisabledDays(scheduleDays)
  const [pickerHourItems, setPickerHourItems] = useState([])
  const scheduleHours = navigation.getParam('scheduleHours')
    .map((hoursArray) => {
      return hoursArray.map((hour) => ({ label: hour, value: hour }))
    })

  const [alreadyScheduledDates] = useState([])
  const [alreadyScheduledHours] = useState([])

  getManicureSchedule = async () => {
    const response = await listManicureSchedule(
      navigation.getParam('_id'), await storage.getToken()
    )

    response.data.forEach(element => {
      alreadyScheduledDates.push(
        moment(element.marked_date).format('YYYY-MM-DD')
      )

      alreadyScheduledHours.push(
        moment(element.marked_date).hours() +
        moment(element.marked_date).format('HH:mm').substring(2, 5)
      )
    })

    setIsLoading(false)
  }

  useEffect(() => {
    getManicureSchedule()
  }, [])

  updateTotal = (serviceText, price, sum = true) => {
    sum ? setTotal(total + price) : setTotal(total - price)

    sum ? setDescription({
      ...description,
      [serviceText]: price
    }) : setDescription({
      ...description,
      [serviceText]: undefined
    })
  }

  handleDayChange = (date) => {
    setIsLoading(true)
    setCalendarDate(date.dateString)

    let hourUnselectable = []

    for (let index = 0; index < alreadyScheduledDates.length; index++)
      if (alreadyScheduledDates[index] == date.dateString) {
        hourUnselectable.push(alreadyScheduledHours[index])
      }

    const pickerItems = []

    scheduleHours[moment(date.dateString).day() - (disabledDays.length - 1)]
      .forEach((hour) => {
        let isDuplicate = false
        for (let index = 0; index < hourUnselectable.length; index++) {
          if (hourUnselectable[index] == hour.value) {
            isDuplicate = true
            hourUnselectable.splice(index, 1)
            break
          }
        }

        !isDuplicate && pickerItems.push({
          label: hour.label,
          value: hour.value
        })
      })

    setPickerHourItems(pickerItems)
    setIsLoading(false)
  }

  handleSchedule = () => {
    if (!calendarDate || total == 0 || hour == null) return

    Alert.alert(
      'Confirmação',
      `Deseja agendar seu atendimento para ${
      moment(calendarDate, 'YYYY-MM-DD').format('DD/MM')} às ${hour}?`,
      [
        { text: 'Não' },
        {
          text: 'Sim',
          onPress: () => tryToSchedule()
        }
      ]
    )
  }

  tryToSchedule = async () => {
    setIsLoading(true)

    const id_user = JSON.parse(await storage.getUser())._id

    let formattedDescription = ''

    Object.keys(description).forEach((key) => {
      formattedDescription += `${key}: ${description[key]},`
    })

    const hoursParts = hour.split(':')

    const date = moment(calendarDate)
    date.set({ hour: hoursParts[0], minute: hoursParts[1] })

    const response = await addScheduledHour(
      navigation.getParam('_id'), id_user, date, total,
      formattedDescription.substring(0, formattedDescription.length - 1),
      await storage.getToken()
    )

    setIsLoading(false)

    if (response.data.message) {
      if (response.data.message == 'Hour already taken') {
        setPickerHourItems(
          pickerHourItems.filter((itemPicker) => {
            return itemPicker.value != hour
          })
        )
      }

      Alert.alert('Ops...', HandleAPIErrorMessage(response.data.message))
      return
    }

    Alert.alert(
      'Sucesso',
      `Seu agendamento foi realizado com sucesso!`,
      [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Home')
        }
      ]
    )
  }

  return (
    <Container>
      <FullscreenBackgroundImage />

      {isLoading && <StyledIndicator />}

      <ContentContainer style={{ display: isLoading ? 'none' : null }}>
        {
          servicesPrices[0] > 0 &&
          <ManicureServiceView
            serviceText={servicesNames[0]}
            price={servicesPrices[0]}
            toggle={updateTotal}
          />
        }

        {
          servicesPrices[1] > 0 &&
          <ManicureServiceView
            serviceText={servicesNames[1]}
            price={servicesPrices[1]}
            toggle={updateTotal}
          />
        }

        <DateTimeContainer>
          <DateTimeButton onPress={() => setCalendarVisible(true)}>
            <ButtonText>Selecione a data do atendimento</ButtonText>
          </DateTimeButton>

          <SelectedDateText>
            Data selecionada: {
              calendarDate ?
                moment(calendarDate, 'YYYY-MM-DD').format('DD/MM') : '-'
            }
          </SelectedDateText>

          <CalendarModal
            visibility={calendarVisible}
            onClose={() => setCalendarVisible(false)}
            onDaySelect={handleDayChange}
            disabledDays={disabledDays}
          />

          {
            calendarDate &&
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
                items={pickerHourItems}
              />
            </PickerContainer>
          }
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
      </ContentContainer>
    </Container>
  )
}

createStyledHeaderWithBackButton(ManicureDetails)
