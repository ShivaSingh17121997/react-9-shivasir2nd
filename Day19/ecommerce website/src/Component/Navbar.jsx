import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", backgroundColor:'pink', height:"50px", textAlign:"center", alignItems:'center' }} >
        <Link to="/">Form</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        </div>
  )
}
