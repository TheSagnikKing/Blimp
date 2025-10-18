import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const usersignindata = JSON.parse(localStorage.getItem("usersignindata")) || null
    const authenticatedUser = JSON.parse(localStorage.getItem("usersignin")) || false

    useEffect(() => {
        setUser(usersignindata)
        setIsAuthenticated(authenticatedUser)
    }, [])

    const value = {
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
