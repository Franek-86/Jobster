import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'

import { deleteJobThunk, editJobThunk, postJobThunk } from './jobThunk'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}

export const postJob = createAsyncThunk('post/jobs', postJobThunk)
export const deleteJob = createAsyncThunk('delete/job', deleteJobThunk)
export const editJob = createAsyncThunk('edit/jobs', editJobThunk)

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearJob: (state, action) => {
      return {
        ...initialState,
        jobLocation: action.payload,
      }
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: {
    [postJob.pending]: (state, action) => {
      state.isLoading = true
    },
    [postJob.fulfilled]: (state, action) => {
      state.isLoading = false
      toast.success('job created')
    },
    [postJob.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
    [deleteJob.fulfilled]: (state, action) => {
      state.isLoading = false
      toast.success('job deleted')
    },
    [deleteJob.rejected]: (state, action) => {
      toast.error(action.payload)
    },
    [editJob.pending]: (state, action) => {
      state.isLoading = true
    },
    [editJob.fulfilled]: (state, action) => {
      state.isLoading = false
      toast.success('job modified...')
    },
    [editJob.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
  },
})

export default jobSlice.reducer
export const { handleChange, clearJob, setEditJob } = jobSlice.actions

// - POST /jobs
// - { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
// - authorization header : 'Bearer token'
// - sends back the job object
