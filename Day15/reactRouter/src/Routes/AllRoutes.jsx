import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

// step 1 install react-router-dom
// step 2 create routes
export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ram' element={<Contacts />} />
                <Route path='/shyam' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}
