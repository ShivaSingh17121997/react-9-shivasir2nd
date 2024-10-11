import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from '../Pages/Form'
import Products from '../Pages/Products'
import SingleProductPage from '../Pages/SingleProductPage'
import AddTocart from '../Component/AddTocart'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/products' element={<Products />} />
            <Route path='/singleproductpage/:id' element={<SingleProductPage />} />
            <Route path='/cart' element={<AddTocart />} />
        </Routes>
    )
}
