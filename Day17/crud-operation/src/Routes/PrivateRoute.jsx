import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AtuthContexProvider';

export default function PrivateRoute({ children }) {

    const { isAuth } = useContext(AuthContext);


    console.log(isAuth)



    if (!isAuth) {
        return <Navigate to="/login" />
    }


    return (
        <div>
            {children}
        </div>
    )
}
