
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AtuthContexProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    console.log(isAuth, token)

    function login(token) {
        setIsAuth(true);
        setToken(token);
    }

    function logout() {
        setIsAuth(false);
        setToken(null);
    }



    return (
        <div>
            <AuthContext.Provider value={{ login, logout, isAuth }} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}
