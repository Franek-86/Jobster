import { configureStore } from '@reduxjs/toolkit'
import jobReducer from './features/job/jobSlice'
import userReducer from './features/user/userSlice'
import allJobsReducer from './features/allJobs/allJobsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    allJobs: allJobsReducer,
  },
})
