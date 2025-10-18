import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {

    const usersignin = JSON.parse(localStorage.getItem("usersignin")) || false

    if (!usersignin) {
        // If i use this then i don't need useEffect 
        return <Navigate to="/" replace />;
    }

    return (
        <Outlet />
    )
}

export default ProtectedRoute