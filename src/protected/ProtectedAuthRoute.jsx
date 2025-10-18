import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedAuthRoute = () => {

    const usersignin = JSON.parse(localStorage.getItem("usersignin")) || false

    if (usersignin) {
        return <Navigate to="/" replace />
    }

    return (
        <Outlet />
    )
}

export default ProtectedAuthRoute