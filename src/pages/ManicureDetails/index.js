import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Animated } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import {
  FullscreenBackgroundImage, ManicureServiceView
} from '../../components'

import {
  createStyledHeaderWithBackButton
} from '../../utils/createStyledHeader'

import { Container } from './styles'

export default function ManicureDetails({ navigation }) {
  const [manicureId, setManicureId] = useState('')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setManicureId(navigation.getParam('id'))
  }, [])

  return (
    <Container>
      <FullscreenBackgroundImage />

      <ManicureServiceView
        serviceText={'Mãos'}
        price={10}
      />

      <ManicureServiceView
        serviceText={'Pés'}
        price={15}
      />

      <View style={{
        alignItems: 'center',
        marginTop: 6
      }}>
        <TouchableOpacity style={{
          height: 42,
          backgroundColor: 'rgb(150, 25, 130)',
          width: '90%',
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Text style={{
            color: '#eff0ed',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 2.5,
          }}
          >
            Selecione a data do atendimento
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          height: 42,
          backgroundColor: 'rgb(150, 25, 130)',
          width: '90%',
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Text style={{
            color: '#eff0ed',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 2.5,
          }}
          >
            Selecione a hora do atendimento
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15
      }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}
            >
              Total:
            </Text>

            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 1.5,
            }}
            >
              R$25,00
            </Text>
          </View>

          <TouchableOpacity style={{
            height: 42,
            backgroundColor: 'rgb(199, 29, 125)',
            width: '70%',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10
          }}>
            <Text style={{
              color: '#eff0ed',
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 2.5,
            }}
            >
              Agendar
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

createStyledHeaderWithBackButton(ManicureDetails)
