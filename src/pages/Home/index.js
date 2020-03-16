import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

import { FullscreenBackgroundImage } from '../../components'
import ListItemHome from './ListItemHome'

import storage from '../../services/storage'
import { listProfessionals } from '../../services/api'

import { createStyledHeader } from '../../utils/createStyledHeader'

import { Container, Content, StyledFlatList, StyledIndicator } from './styles'

export default function Home({ navigation, isFocused }) {
  const animDelayValue = 500
  const [isLoading, setIsLoading] = useState(true)
  const [foundError, setFoundError] = useState(false)
  const [listAnimValue] = useState(new Animated.Value(0))
  const [professionals, setProfessionals] = useState([])

  getProfessionalsList = async () => {
    const { _id } = JSON.parse(await storage.getUser())

    const response = await listProfessionals(_id, await storage.getToken())

    setIsLoading(false)

    if (response.data.message) {
      setFoundError(true)
      return
    }

    setProfessionals(response.data)
    animateListItems()
  }

  useEffect(() => {
    getProfessionalsList()
  }, [])

  useEffect(() => {
    if (!isLoading) animateListItems()
  }, [isFocused])

  animateListItems = () => {
    Animated.spring(listAnimValue, {
      toValue: isFocused ? 1 : 0,
      tension: 20,
      useNativeDriver: true
    }).start()
  }

  return (
    <Container>
      <FullscreenBackgroundImage />

      <Content>
        {
          isLoading ? (
            <StyledIndicator />
          ) : (
              <StyledFlatList
                data={professionals}
                keyExtractor={item => String(item._id)}
                renderItem={({ item }) =>
                  <ListItemHome
                    navigation={navigation}
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
      </Content>
    </Container>
  )
}

createStyledHeader(Home, 'Menu principal')
