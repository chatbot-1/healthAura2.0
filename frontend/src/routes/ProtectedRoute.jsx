import React, { Children, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link, Navigate } from 'react-router-dom'

const ProtectedRoute = ({children, allowed}) => {

    const {token, role} = useContext(AuthContext)

    const isAllowed = allowed.includes(role)

    const accessibleRoute = token && isAllowed ? children : <Navigate to='/log-in' replace={true}/>

  return accessibleRoute;
}

export default ProtectedRoute