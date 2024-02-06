import React, { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user
                console.log('User:', userCredential)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log('Error code:', errorCode)
                console.log('Error message:', errorMessage)
            })
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <h3 className='bg-amber-500 text-black dark:bg-black dark:text-white'>Sign In</h3>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn