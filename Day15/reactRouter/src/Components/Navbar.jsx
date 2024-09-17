import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#abebc6", padding: "20px" }} >
            <Link to="/" > Home </Link>
            <Link to="/shyam" >About</Link>
            <Link to="/ram" >Contacts</Link>
            <Link to="/login" >Login</Link>
            <Link to="/signup" >Signup</Link>
        </div>
    )
}
