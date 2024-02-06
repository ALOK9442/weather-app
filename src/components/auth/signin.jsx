import React, { useState } from 'react'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}

export default SignIn