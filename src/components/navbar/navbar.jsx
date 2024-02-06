import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

    const signedIn = useSelector(state => state.auth.signedIn)
    return (
        <div>
            <p>
                
            </p>
        </div>
    )
}

export default Navbar