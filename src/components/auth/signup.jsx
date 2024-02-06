import React, { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('User:', user)
                navigate('/signin')
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
        <form onSubmit={handleSignUp}>
            <h3>Sign up</h3>
            <input type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
            placeholder="Enter your Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='bg-black'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp