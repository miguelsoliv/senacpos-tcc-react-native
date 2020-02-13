import AsyncStorage from '@react-native-community/async-storage'

const storage = {
  getToken() {
    return AsyncStorage.getItem('@SenacTCC:token')
  },
  setToken(token) {
    if (token === null) {
      AsyncStorage.removeItem('@SenacTCC:token')
    } else {
      AsyncStorage.setItem('@SenacTCC:token', token)
    }
  },

  getUser() {
    return AsyncStorage.getItem('@SenacTCC:user')
  },
  setUser(user) {
    if (user === null) {
      AsyncStorage.removeItem('@SenacTCC:user')
    } else {
      AsyncStorage.setItem('@SenacTCC:user', JSON.stringify(user))
    }
  }
}

export default storage
