import React, { useState, useEffect } from 'react'
import { Animated, FlatList } from 'react-native'

import { FullscreenBackgroundImage, ListItemHome } from '../../components'

import { listManicures } from '../../services/api'

import { createStyledHeader } from '../../utils/createStyledHeader'

import { Container, Content, StyledFlatList, StyledIndicator } from './styles'

export default function Home({ navigation, isFocused }) {
  const animDelayValue = 500
  const [isLoading, setIsLoading] = useState(true)
  const [foundError, setFoundError] = useState(false)
  const [listAnimValue] = useState(new Animated.Value(0))
  const [manicures, setManicures] = useState([])

  getManicuresList = async () => {
    const response = await listManicures()

    setIsLoading(false)

    if (response.data.message) {
      setFoundError(true)
      return
    }

    setManicures(response.data)
  }

  useEffect(() => {
    getManicuresList()
  }, [])

  useEffect(() => {
    Animated.spring(listAnimValue, {
      toValue: isFocused ? 1 : 0,
      tension: 20,
      useNativeDriver: true
    }).start()
  }, [isFocused])

  return (
    <Container>
      <FullscreenBackgroundImage />

      <Content>
        {
          isLoading ? (
            <StyledIndicator />
          ) : (
              <StyledFlatList
                data={manicures}
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
