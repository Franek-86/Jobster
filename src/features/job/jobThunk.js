import { axiosThing, unauthenticatedError } from '../../utils/axiosThing'
import { getAllJobs, hideLoading, showLoading } from '../allJobs/allJobsSlice'

import { clearJob } from './jobSlice'

// export const test = async (_, thunkAPI) => {
//   try {
//     const resp = await axiosThing.get('jobs')

//     return resp.data
//   } catch (error) {
//     console.log(error.response)
//     return thunkAPI.rejectWithValue(error.response.data.msg)
//   }
// }

export const postJobThunk = async (name, thunkAPI) => {
  try {
    const resp = await axiosThing.post(
      '/jobs',

      name
    )
    thunkAPI.dispatch(clearJob())
    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  let url = jobId
  thunkAPI.dispatch(showLoading())
  try {
    const resp = await axiosThing.delete(`/jobs/${url}`)
    thunkAPI.dispatch(getAllJobs())
    return resp.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return unauthenticatedError(error, thunkAPI)
  }
}

export const editJobThunk = async (name, thunkAPI) => {
  try {
    const { editJobId, test } = name
    let url = editJobId
    const location = thunkAPI.getState().user.user.location
    const resp = await axiosThing.patch(`/jobs/${url}`, test)
    thunkAPI.dispatch(clearJob(location))
    return resp.data
  } catch (error) {
    return unauthenticatedError(error, thunkAPI)
  }
}
