import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()

export default function Login() {
    const [userEmail, setUseEmail] = useState("");
    const [password, setPasswrod] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();

        // validation logic
        if (!userEmail || !password) {
            alert("all fiends required")
            return;
        }

        // login logic form firebase 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, userEmail, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.accessToken)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });

    }

    // signinwith google pop up

    const handleSigninWithGoogle = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential)
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
                // ...
            });

    }




    return (
        <div>
            <h1>Login</h1>

            <div>
                <form onSubmit={handleLogin} >
                    <div>
                        <input value={userEmail} onChange={(e) => setUseEmail(e.target.value)} type="text" placeholder='Email' />
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
            <br /><br />

            <div>
                <button onClick={handleSigninWithGoogle} >Singn in with google</button>
            </div>


        </div>
    )
}
