import axios from 'axios'
import { axiosThing, unauthenticatedError } from '../../utils/axiosThing'
import { getFromStorage } from '../../utils/storage'
import { clearFilters } from '../allJobs/allJobsSlice'
import { clearJob } from '../job/jobSlice'
import { logoutUser } from './userSlice'

export const logReturn = async (name, thunkAPI) => {
  try {
    const resp = await axios.post(
      'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/login',
      name
    )
    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}

export const regReturn = async (name, thunkAPI) => {
  try {
    const resp = await axiosThing.post('auth/register', name)
    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}

export const updReturn = async (name, thunkAPI) => {
  try {
    const resp = await axiosThing.patch('auth/updateUser', name)
    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}

export const clearAllThings = async (test, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(test))
    thunkAPI.dispatch(clearJob())
    thunkAPI.dispatch(clearFilters())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
