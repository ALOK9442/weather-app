import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/authslice'
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('User:', userCredential)
                dispatch(setUser(email))
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log('Error code:', errorCode)
                console.log('Error message:', errorMessage)
            })
    }
    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            <form onSubmit={handleLogin} className='flex flex-col rounded-md items-center border-2 h-screen p-8 space-y-6 sm:w-1/2 w-full'>
                <h3 className='font-mono text-4xl p-4 items-center justify-center w-fit rounded-md m-4'>Sign In</h3>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border-2 p-2 rounded-md'
                />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-2 p-2 rounded-md'
                />
                <button type="submit" className='w-full border-2 p-4 hover:bg-red-300 rounded-md bottom-0'>Sign In</button>
                <p className='font-mono'>Don't have an account? <Link to='/signup' className='text-black'>Sign Up</Link></p>
            </form>
        </div>
    )
}

export default SignIn