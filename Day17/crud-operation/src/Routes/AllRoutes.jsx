import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Form from '../Pages/Form';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />

                <Route path='/form' element={
                    <PrivateRoute>
                        <Form />
                    </PrivateRoute>
                } />

                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}
