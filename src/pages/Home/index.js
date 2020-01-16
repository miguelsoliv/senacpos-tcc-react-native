import React, { useState, useEffect } from 'react'
import { FlatList, Animated, View } from 'react-native'
import ListItemHome from '../../components/ListItemHome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import sampleAvatar from '../../assets/Ebichu.jpg'
import {
  Container, HeaderContainer, HeaderTitle, Content
} from './styles'

export default function Home({ navigation }) {
  const delayValue = 500
  const animatedValue = new Animated.Value(0)
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
    Animated.spring(animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <Icon
          onPress={() => navigation.toggleDrawer()}
          name='menu' size={30} color='rgb(248, 228, 239)'
          style={{ marginLeft: 6 }} />

        <HeaderTitle>MENU PRINCIPAL</HeaderTitle>
      </HeaderContainer>

      <Content>
        <FlatList
          data={manicures}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ListItemHome item={item} translateX={
            animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [delayValue, 1]
            })}
          />}
          showsVerticalScrollIndicator={false}

          ItemSeparatorComponent={() => (
            <View style={[{
              marginTop: 20,
              alignSelf: 'center',
              backgroundColor: '#333',
              height: 0.5,
              width: '65%'
            }]} />
          )}
        />
      </Content>
    </Container>
  )
}
