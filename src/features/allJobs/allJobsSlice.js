import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { axiosThing } from '../../utils/axiosThing'
import { getAllJobsThunk, getAllStats } from '../allJobs/allJobsThunk'

export const getAllJobs = createAsyncThunk('allJobs/getJobs', getAllJobsThunk)

export const getStats = createAsyncThunk('allJobs/getStats', getAllStats)

const initialFilters = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState = {
  isLoading: false,
  jobs: [],
  stats: {},
  monthlyApplications: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  ...initialFilters,
}

export const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = true
    },
    hideLoading: (state, action) => {
      state.isLoading = false
    },
    changeFilters: (state, { payload: { name, value } }) => {
      if (state.isLoading) return
      state.page = 1
      state[name] = value
    },
    clearFilters: () => initialState,
    changePage: (state, { payload }) => {
      state.page = payload
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state, action) => {
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.jobs = payload.jobs
      state.numOfPages = payload.numOfPages
      state.totalJobs = payload.totalJobs
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [getStats.pending]: (state, action) => {
      state.isLoading = true
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false

      state.stats = payload.defaultStats
      state.monthlyApplications = payload.monthlyApplications
    },
    [getStats.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})
export const {
  showLoading,
  hideLoading,
  changeFilters,
  clearFilters,
  changePage,
} = allJobsSlice.actions

export default allJobsSlice.reducer
