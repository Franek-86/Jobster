import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosThing } from '../../utils/axiosThing'
import { toast } from 'react-toastify'
import { getFromStorage, setStorage, removeStorage } from '../../utils/storage'

import {
  clearAllThings,
  logReturn,
  regReturn,
  updReturn,
} from '../user/userThunk'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const initialState = {
  user: getFromStorage(),
  isLoading: false,
  isSidebarOpen: false,
}

// const clearAllValues = createAsyncThunk(
//   'user/clearAll',
//   async (_, thunkAPI) => {
//     const dispatch = useDispatch()
//     try {
//       ThunkAPI.dispatch(logoutUser())
//       ThunkAPI.dispatch(clearJob())
//       ThunkAPI.dispatch(clearFilters())
//       return Promise.resolve
//     } catch (error) {
//       return Promise.reject
//     }
//   }
// )
export const clearEverything = createAsyncThunk('ClearAll', clearAllThings)
export const registerUser = createAsyncThunk('user/registerUser', regReturn)
export const loginUser = createAsyncThunk('user/loginUser', logReturn)
export const updateUser = createAsyncThunk('user/update', updReturn)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state, action) => {
      state.user = null
      if (action.payload) {
        toast.success(`logging out`)
      }
      removeStorage('user')
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.user = action.payload.user
      setStorage(action.payload.user)
      toast.success(`hello there ${state.user.name}`)
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
    [loginUser.pending]: (state, action) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.user = action.payload.user
      setStorage(action.payload.user)
      toast.success(`Welcome back ${state.user.name}`)
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },

    [updateUser.pending]: (state, action) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.user = action.payload.user
      setStorage(action.payload.user)
      toast.success(`user updated`)
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
    [clearEverything.fulfilled]: (state, action) => {
      state.isLoading = false
      toast.success(action.payload)
    },
  },
})
export const { toggleSidebar, logoutUser } = userSlice.actions
export default userSlice.reducer

// #### 25) API

// - Root URL
// - https://jobify-prod.herokuapp.com/api/v1/toolkit

// - NODE COURSE

// ###### Register USER

// - https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register

// - POST /auth/register
// - {name:'john',email:'john@gmail.com',password:'secret'}
// - sends back the user object with token

// ###### Register USER - TESTING()

// - POST /auth/testingRegister
// - {name:'john',email:'john@gmail.com',password:'secret'}
// - sends back the user object with token

// ###### Login USER

// - POST /auth/login
// - {email:'john@gmail.com',password:'secret'}
// - sends back the user object with token
