import axios from 'axios'

const api = axios.create({
  baseURL: 'https://senacpos-tcc.herokuapp.com/'
  //baseURL: 'http://10.0.2.2:3333'
})

export function validateToken(token) {
  return api.post('/validate-token', { token })
}

export function signin(email, password) {
  return api.post('/authenticate', { email, password })
}

export function createCustomerAccount(name, email, password) {
  return api.post('/users', { name, email, password })
}

export function createProfessionalAccount(
  name, email, password, photo_url, services, schedule
) {
  return api.post('/users', {
    name, email, password, photo_url, services, schedule
  })
}

export function forgotPassword(email) {
  return api.post('/forgot-password', { email })
}

export function updateCustomer(id, updatedData, token) {
  return api.put(`/customers/${id}`, updatedData, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export function updateProfessional(id, updatedData, token) {
  return api.put(`/professionals/${id}`, updatedData, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export function listProfessionals(id, token) {
  return api.get(`/professionals/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export function addScheduledHour(
  id_professional, id_user, username, marked_date, total, description, token
) {
  return api.post('/schedule', {
    id_professional, id_user, username, marked_date, total, description
  }, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export function listProfessionalSchedule(id, token) {
  return api.get(`/schedule/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}
