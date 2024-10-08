import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PrivateRoute from '../Routes/PrivateRoute';
import { AuthContext } from '../Context/AtuthContexProvider';

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPasswrod] = useState("");
    // const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const { login } = useContext(AuthContext); // destruring the login function 


    // add the values of useranme and password in teh local storage

    let SignupUsername = localStorage.getItem('username')
    let SignupPass = localStorage.getItem('pass')

    let token;

    const handleLogin = (e) => {
        e.preventDefault();

        if (!userName || !password) {
            alert("all fiends required")

            return;
        }

        if (userName === SignupUsername && password === SignupPass) {
            alert("user logged in successfully")
            token = "valid Token"
            console.log(token)

            login(token)// login function is invoked here passed with argument token

            navigate("/form")

        } else {
            alert("your username or password is incorrect!")
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <div>
                <form onSubmit={handleLogin} >
                    <div>
                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Username' />
                    </div>
                    <br />
                    <div>
                        <input value={password} onChange={(e) => setPasswrod(e.target.value)} type="password" placeholder='Enter your password' />
                    </div>
                    <br />
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>

            <div>
                <PrivateRoute token={token} />
            </div>
        </div>
    )
}
