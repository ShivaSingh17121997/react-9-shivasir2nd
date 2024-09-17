import React, { useState } from 'react'

export default function Signup() {
    const [userName, setUserName] = useState("");
    const [password, setPasswrod] = useState("");

    // add the values of useranme and password in teh local storage


    const handleSignup = (e) => {
        e.preventDefault();

        localStorage.setItem("username", userName);
        localStorage.setItem("pass", password)
        console.log('user registered successfully')

    }


    return (
        <div>
            <h1>Signup</h1>

            <div>
                <form onSubmit={handleSignup} >
                    <div>
                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Username' />
                    </div>
                    <br />
                    <div>
                        <input value={password} onChange={(e) => setPasswrod(e.target.value)} type="password" placeholder='Enter your password' />
                    </div>
                    <br />
                    <div>
                        <button>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
