import React, { useState, useEffect } from 'react'
import { FlatList, Animated } from 'react-native'

import FullscreenBackgroundImage from '../../components/FullscreenBackgroundImage'
import ListItemHome from '../../components/ListItemHome'

import sampleAvatar from '../../assets/Ebichu.jpg'

import {
  Container, HeaderContainer, HeaderIconMenu, HeaderTitle, Content,
  SearchContainer, SearchInput, SearchIcon
} from './styles'

export default function Home({ navigation, isFocused }) {
  const animDelayValue = 500
  const [listAnimValue] = useState(new Animated.Value(0))
  const [manicures, setManicures] = useState([
    {
      id: 1,
      name: 'Manicure 1',
      description: 'Serviços da Manicure 1: ---',
      photo: sampleAvatar
    }, {
      id: 2,
      name: 'Manicure 2',
      description: 'Serviços da Manicure 2: ---',
      photo: sampleAvatar
    },
    {
      id: 3,
      name: 'Manicure 3',
      description: 'Serviços da Manicure 3: ---',
      photo: sampleAvatar
    },
    {
      id: 4,
      name: 'Manicure 4',
      description: 'Serviços da Manicure 4: ---asdhygsadyusaudhsydgsagdaygdysydgasydg ysagdygasydgysagdyasgd yagsdygsydgaygdysa gdyga',
      photo: sampleAvatar
    },
    {
      id: 5,
      name: 'Manicure 5',
      description: 'Serviços da Manicure 5: ---',
      photo: sampleAvatar
    },
    {
      id: 6,
      name: 'Manicure 6',
      description: 'Serviços da Manicure 6: ---',
      photo: sampleAvatar
    },
    {
      id: 7,
      name: 'Manicure 7',
      description: 'Serviços da Manicure 7: ---',
      photo: sampleAvatar
    }])

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

      <HeaderContainer>
        <HeaderIconMenu onPress={() => navigation.toggleDrawer()} />

        <HeaderTitle>MENU PRINCIPAL</HeaderTitle>
      </HeaderContainer>

      <Content>
        <SearchContainer>
          <SearchInput placeholder={'Pesquisar por serviço'} />
          <SearchIcon />
        </SearchContainer>

        <FlatList
          data={manicures}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <ListItemHome
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
      </Content>
    </Container>
  )
}
