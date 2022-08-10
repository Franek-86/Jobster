import styled from 'styled-components'
import { Error, Landing, Register } from '../src/pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { SharedLayout, Stats, AllJobs, AddJob, Profile } from './dashboard'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <div>
      <ToastContainer position='top-center' />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index path='/' element={<Stats />} />
            <Route path='all-jobs' element={<AllJobs />} />
            <Route path='add-job' element={<AddJob />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='Landing' element={<Landing />} />
          <Route path='Register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
