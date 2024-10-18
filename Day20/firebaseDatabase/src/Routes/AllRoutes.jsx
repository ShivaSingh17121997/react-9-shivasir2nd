import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Todo from '../Todos/Todo'
import Login from '../Todos/Login'
import Register from '../Todos/Register'

export default function AllRoutes() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
