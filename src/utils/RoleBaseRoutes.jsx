<<<<<<< HEAD
import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children, requiredRole}) => {
  const {user, loading} = useAuth()

  if(loading) {
    return <div>Loading ...</div>
  }

  if(!requiredRole.includes(user.role)) {
    <Navigate to="/unauthorized"/>
  }
  return user ? children : <Navigate to="/login" />
}

export default RoleBaseRoutes
=======
import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children, requiredRole}) => {
  const {user, loading} = useAuth()

  if(loading) {
    return <div>Loading ...</div>
  }

  if(!requiredRole.includes(user.role)) {
    <Navigate to="/unauthorized"/>
  }
  return user ? children : <Navigate to="/login" />
}

export default RoleBaseRoutes
>>>>>>> 789b76e3a6e511471c37f3df811f9bd65b7a1c48
