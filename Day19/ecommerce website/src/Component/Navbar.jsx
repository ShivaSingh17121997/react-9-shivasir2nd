import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const cartLength = useSelector(store => store.cart.cartLength)
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: 'pink', height: "50px", textAlign: "center", alignItems: 'center' }} >
      <Link to="/">Form</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">{`Cart <sup>${cartLength}</sup> `}</Link>
    </div>
  )
}


//
