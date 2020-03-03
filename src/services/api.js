import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://senacpos-tcc.herokuapp.com/'
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

export function updateUser(id, name, email, password, token) {
  return api.put(`/users/${id}`, { name, email, password }, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export function listManicures() {
  return api.get('/manicures')
}

export function addScheduledHour(
  id_manicure, id_user, marked_date, total, description, token
) {
  return api.post('/schedule', {
    id_manicure, id_user, marked_date, total, description
  }, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export function listManicureSchedule(id_manicure, token) {
  return api.get(`/schedule/${id_manicure}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}
