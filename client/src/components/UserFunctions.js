import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}
export const addCrop = newCrop => {
  return axios
    .post('addCrop/add', {
      email: newCrop.email,
      phone: newCrop.phone,
      village: newCrop.village,
      district: newCrop.district,
      state: newCrop.state,
      crop: newCrop.crop,
      soil: newCrop.soil,
      area: newCrop.area
    })
    .then(response => {
      console.log('Registered')
    })
}
export const query = newQuery => {
  return axios
    .post('query/addq', {
      email: newQuery.email,
      phone: newQuery.phone,
      crop: newQuery.crop,
      query: newQuery.query,
      isAnswered: false
    })
    .then(response => {
      console.log('Query Posted Succesfully')
    })
}
export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}