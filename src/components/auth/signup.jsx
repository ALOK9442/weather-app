import React, { useState } from 'react'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <div>
        <form>
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
        </form>
    </div>
  )
}

export default SignUp