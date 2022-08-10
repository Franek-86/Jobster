import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  if (!user) {
    return <Navigate to='/landing' />
  }
  return children
}

export default ProtectedRoute
