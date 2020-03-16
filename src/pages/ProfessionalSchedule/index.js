import React, { useState, useEffect } from 'react'
import { FlatList, Animated, RefreshControl } from 'react-native'

import storage from '../../services/storage'
import { listProfessionalSchedule } from '../../services/api'

import { createStyledHeader } from '../../utils/createStyledHeader'

import { FullscreenBackgroundImage } from '../../components'
import ListItemSchedule from './ListItemSchedule'

import { Container, StyledIndicator } from './styles'

export default function ProfessionalSchedule({ isFocused }) {
  const [isLoading, setIsLoading] = useState(false)
  const [schedule, setSchedule] = useState()
  const [refreshing, setRefreshing] = useState(false)

  const animDelayValue = 500
  const [listAnimValue] = useState(new Animated.Value(0))

  useEffect(() => {
    if (isFocused) loadSchedule()
  }, [isFocused])

  useEffect(() => {
    if (!isLoading) {
      Animated.spring(listAnimValue, {
        toValue: isFocused ? 1 : 0,
        tension: 20,
        useNativeDriver: true
      }).start()
    }
  }, [isLoading])

  loadSchedule = async () => {
    setIsLoading(true)

    const { _id } = JSON.parse(await storage.getUser())

    const response = await listProfessionalSchedule(
      _id, await storage.getToken()
    )

    setSchedule(response.data)
    setIsLoading(false)
  }

  refreshList = async () => {
    setRefreshing(true)
    await loadSchedule()
    setRefreshing(false)
  }

  return (
    <Container>
      <FullscreenBackgroundImage />
      {
        isLoading ? <StyledIndicator /> : (
          <FlatList
            style={{ marginTop: 6 }}
            data={schedule}
            keyExtractor={(_, index) => index.toString()}
            onRefresh={refreshList}
            refreshing={refreshing}
            ListFooterComponent={isLoading && <StyledIndicator />}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refreshList}
                progressBackgroundColor={'rgb(255, 255, 239)'}
                colors={['#222']} />
            }
            renderItem={({ item }) =>
              <ListItemSchedule
                item={item}
                translateX={
                  listAnimValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [animDelayValue, 1]
                  })
                }
              />
            }
          />
        )
      }
    </Container>
  )
}

createStyledHeader(ProfessionalSchedule, 'Agenda')
