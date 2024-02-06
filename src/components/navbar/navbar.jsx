import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../store/authslice';

function Navbar() {
    const signedIn = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        if (signedIn) {
            dispatch(signOut());
            navigate('/');
        }
    };

    return (
        <div className='top-2 ml-auto mr-2'>
            {signedIn ? 
            (
                <FontAwesomeIcon icon={faSignOut} className="text-2xl" onClick={handleClick} />
            ) : (
                <div className='space-x-2'>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
