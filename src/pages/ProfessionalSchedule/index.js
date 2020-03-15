import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import storage from '../../services/storage'
import { listProfessionalSchedule } from '../../services/api'

import { createStyledHeader } from '../../utils/createStyledHeader'

import { FullscreenBackgroundImage } from '../../components'
import ListItemSchedule from './ListItemSchedule'

import { StyledIndicator } from './styles'

export default function ProfessionalSchedule({ isFocused }) {
  const [isLoading, setIsLoading] = useState()
  const [userId, setUserId] = useState()
  const [schedule, setSchedule] = useState()

  useEffect(() => {
    if (isFocused) loadSchedule()
  }, [isFocused])

  loadSchedule = async () => {
    setIsLoading(true)

    if (!userId) {
      const { _id } = JSON.parse(await storage.getUser())
      setUserId(_id)
    }

    const response = await listProfessionalSchedule(
      userId, await storage.getToken()
    )

    console.log(response.data)
    setSchedule(response.data)
    setIsLoading(false)
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(248, 228, 239)' }}>
      <FullscreenBackgroundImage />
      {
        isLoading ? <StyledIndicator /> : (
          <FlatList
            data={schedule}
            renderItem={({ item }) =>
              <ListItemSchedule item={item} />
            }
          />
        )
      }
    </View>
  )
}

createStyledHeader(ProfessionalSchedule, 'Agenda')
