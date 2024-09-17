import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import About from '../Page/About';
import Contact from '../Page/Contact';
import SingleProductPage from '../Page/SingleProductPage';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='/single/:id' element={<SingleProductPage />} />
                
            </Routes>
        </div>
    )
}
