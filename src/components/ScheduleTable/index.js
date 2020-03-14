import React, { useState, useEffect } from 'react'

import WeekdayHoursModal from './WeekdayHoursModal'

import {
  HeaderContainer, HeaderText, TableContainer, TableWeekdayContainer,
  TableWeekdayText, TouchableHoursInterval, HoursIntervalContainer,
  HoursIntervalFillView, HoursIntervalText, SquareEditContainer, EditIcon
} from './styles'

export default function ScheduleTable() {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedDay, setSelectedDay] = useState('Domingo')
  const [minHourToDelete, setMinHourToDelete] = useState('21')
  const [maxHourToDelete, setMaxHourToDelete] = useState('0')

  const [weekdaysObject, setWeekdaysObject] = useState({
    'Domingo': [], 'Segunda': [], 'Terça': [],
    'Quarta': [], 'Quinta': [], 'Sexta': [],
    'Sábado': []
  })

  useEffect(() => {
    weekdaysObject[selectedDay].forEach((interval) => {
      const partsInterval = interval.split('-')

      if (Number(minHourToDelete) > Number(partsInterval[0].substring(0, 2))) {
        setMinHourToDelete(partsInterval[0].substring(0, 2))
      }

      if (Number(maxHourToDelete) < Number(partsInterval[1].substring(0, 2))) {
        setMaxHourToDelete(partsInterval[1].substring(0, 2))
      }
    })

    console.log('LENGTH: ' + weekdaysObject[selectedDay].length)

    if (weekdaysObject[selectedDay].length == 0) {
      setMinHourToDelete('21')
      setMaxHourToDelete('0')
    }
  }, [weekdaysObject])

  handleHoursIntervalPress = (weekday) => {
    setModalVisible(true)
    setSelectedDay(weekday)
  }

  handleIntervalChange = (newArray) => {
    let updatedObject = { ...weekdaysObject }
    updatedObject[selectedDay] = [...newArray]

    setWeekdaysObject(updatedObject)
  }

  return (
    <>
      <HeaderContainer>
        <HeaderText>Seus horários</HeaderText>
      </HeaderContainer>
      {
        Object.keys(weekdaysObject).map((weekday, index) => {
          const color = index % 2 != 0 ?
            'rgb(233, 168, 205)' : 'rgb(248, 228, 239)'
          return (
            <TableContainer key={index}>
              <TableWeekdayContainer style={{ backgroundColor: color }}>
                <TableWeekdayText>{weekday}</TableWeekdayText>
              </TableWeekdayContainer>

              <TouchableHoursInterval
                onPress={() => handleHoursIntervalPress(weekday)}
              >
                <HoursIntervalContainer style={{ backgroundColor: color }}>
                  <HoursIntervalFillView>
                    {
                      weekdaysObject[weekday].map((interval, index) => {
                        return (
                          <HoursIntervalText key={index}>
                            {interval}
                          </HoursIntervalText>
                        )
                      })
                    }
                  </HoursIntervalFillView>

                  <SquareEditContainer>
                    <EditIcon />
                  </SquareEditContainer>
                </HoursIntervalContainer>
              </TouchableHoursInterval>
            </TableContainer>
          )
        })
      }

      <WeekdayHoursModal
        visibility={modalVisible}
        onClose={() => setModalVisible(false)}
        day={selectedDay}
        intervals={weekdaysObject[selectedDay]}
        onIntervalChanged={(newArray) => handleIntervalChange(newArray)}
        minHourToDelete={minHourToDelete}
        maxHourToDelete={maxHourToDelete}
      />
    </>
  )
}
