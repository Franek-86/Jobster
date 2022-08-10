import { axiosThing, unauthenticatedError } from '../../utils/axiosThing'
import { getFromStorage } from '../../utils/storage'

export const getAllJobsThunk = async (_, thunkAPI) => {
  const user = getFromStorage()
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs
  let url = `jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
  if (search) {
    url = url + `&search=${search}`
  }
  try {
    const resp = await axiosThing.get(url)
    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}

export const getAllStats = async (_, thunkAPI) => {
  const user = getFromStorage()
  try {
    const resp = await axiosThing.get('jobs/stats')

    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}
