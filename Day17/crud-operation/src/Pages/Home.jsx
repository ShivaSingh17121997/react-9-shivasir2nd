import React, { useContext } from 'react'
import { AuthContext } from '../Context/AtuthContexProvider'

export default function Home() {

  const { logout } = useContext(AuthContext);
  console.log(logout)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout} >Logout</button>
    </div>
  )
}
