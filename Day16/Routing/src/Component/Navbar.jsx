import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar' >
            <Link to="/" >Home</Link>
            <Link to="/about" > About</Link>
            <Link to="/contact" >Contacts</Link>
        </div>
    )
}
