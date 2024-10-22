import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [userEmail, setUseEmail] = useState("");
  const [password, setPasswrod] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();

    // validation logic
    if (!userEmail || !password) {
      alert("all fiends required")
      return;
    }

    // auth logic
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        alert("user registered successfully")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });


  }

  return (
    <div>
      <h1>Register</h1>

      <div>
        <form onSubmit={handleRegister} >
          <div>
            <input value={userEmail} onChange={(e) => setUseEmail(e.target.value)} type="text" placeholder='Email' />
          </div>
          <br />
          <div>
            <input value={password} onChange={(e) => setPasswrod(e.target.value)} type="password" placeholder='Enter your password' />
          </div>
          <br />
          <div>
            <button>Register</button>
          </div>
        </form>
      </div>


    </div>
  )
}
