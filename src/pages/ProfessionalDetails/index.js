import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import moment from 'moment'

import {
  FullscreenBackgroundImage, ProfessionalServiceView
} from '../../components'

import { addScheduledHour, listProfessionalSchedule } from '../../services/api'
import storage from '../../services/storage'

import {
  createStyledHeaderWithBackButton
} from '../../utils/createStyledHeader'
import formatCurrency from '../../utils/formatCurrency'
import { changeDayNames } from '../../utils/handleDaysArray'
import HandleAPIErrorMessage from '../../utils/handleAPIErrorMessage'

import CalendarModal from './CalendarModal'

import {
  Container, ContentContainer, DateTimeContainer, DateTimeButton, ButtonText,
  PickerContainer, BottomContainer, SelectedDateText, PricingContainer,
  TotalText, PriceText, ScheduleButton, StyledIndicator
} from './styles'

export default function ProfessionalDetails({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [calendarDate, setCalendarDate] = useState(null)
  const [hour, setHour] = useState(null)
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [description, setDescription] = useState({
    names: navigation.getParam('servicesNames'),
    prices: navigation.getParam('servicesNames').map(() => { return 0 })
  })

  const servicesNames = navigation.getParam('servicesNames')
  const servicesPrices = navigation.getParam('servicesPrices')
  const scheduleDays = changeDayNames(navigation.getParam('scheduleDays'))
  const [pickerHourItems, setPickerHourItems] = useState([])
  const scheduleHours = navigation.getParam('scheduleHours')
    .map((hoursArray) => {
      return hoursArray.map((hour) => ({
        label: hour,
        value: hour
      }))
    })

  const usableDays = scheduleDays.filter((day, index) => {
    if (scheduleHours[index][0].value) return day
  })

  const disabledDays = []

  scheduleDays.forEach(weekday => {
    if (!usableDays.includes(weekday)) disabledDays.push(weekday)
  })

  const [alreadyScheduledDates] = useState([])
  const [alreadyScheduledHours] = useState([])

  const getProfessionalSchedule = async () => {
    const response = await listProfessionalSchedule(
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
    getProfessionalSchedule()
  }, [])

  updateTotal = (serviceText, price, sum) => {
    sum ? setTotal(total + price) : setTotal(total - price)

    const index = description.names.indexOf(serviceText)

    const updatedDescription = { ...description }
    updatedDescription.prices[index] = sum ? price : 0

    setDescription(updatedDescription)
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

    description.names.forEach((serviceName, index) => {
      if (description.prices[index] > 0) {
        formattedDescription +=
          `${serviceName}: ${formatCurrency(description.prices[index])}, `
      }
    })

    const hoursParts = hour.split(':')

    const date = moment(calendarDate)
    date.set({ hour: hoursParts[0], minute: hoursParts[1] })

    const response = await addScheduledHour(
      navigation.getParam('_id'), id_user, date, total,
      formattedDescription.substring(0, formattedDescription.length - 2),
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
          servicesNames.map((service, index) => {
            return (
              servicesPrices[index] > 0 &&
              <ProfessionalServiceView
                key={index}
                serviceText={service}
                price={servicesPrices[index]}
                toggle={(index, serviceText, price, sum) =>
                  updateTotal(index, serviceText, price, sum)}
              />
            )
          })
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

createStyledHeaderWithBackButton(ProfessionalDetails)
