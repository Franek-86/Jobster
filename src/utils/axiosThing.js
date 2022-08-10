import axios from 'axios'
import { toast } from 'react-toastify'
import { clearEverything } from '../features/user/userSlice'

import { getFromStorage } from './storage'

export const axiosThing = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

const user = getFromStorage()
if (user) {
  axiosThing.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${user.token}`
    return config
  })
}

// axiosThing.interceptors.request.use(
//   (config) => {
//     const user = getFromStorage()
//     if (user) {
//       config.headers['Authorization'] = `Bearer ${user.token}`
//       //  config.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
//       return config
//     }
//     return config
//   }

// )

export const unauthenticatedError = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearEverything())
    return thunkAPI.rejectWithValue('Logging you out as unauthorized')
  }

  return thunkAPI.rejectWithValue(error.response.statusText)
}
// export const unauthenticatedError = (error, thunkAPI) => {
//   try {
//     if (error.response.status === 401) {
//       thunkAPI.dispatch(clearEverything())
//       return thunkAPI.rejectWithValue('Logging you out as unauthorized')
//     }
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.statusText)
//   }
// }

// Multiple requests
// In some cases, headers may need to be set automatically for multiple or subsequent requests. We can address this by specifying configuration defaults.

// This code sets authorization headers for all requests:
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
//   'access_token'
// )}`

// Request interceptors for API calls
// axios.interceptors.request.use(
//   config => {
//     config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );
