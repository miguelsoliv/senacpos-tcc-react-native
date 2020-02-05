import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
})

export function validateToken(token) {
  return api.post('/validate-token', { token })
}

export function signin(email, password) {
  return api.post('/authenticate', { email, password })
}

export function createAccount(name, email, password) {
  return api.post('/users', { name, email, password })
}

export function forgotPassword(email) {
  return api.post('/forgot-password', { email })
}
