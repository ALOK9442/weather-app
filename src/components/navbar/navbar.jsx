import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
                    <div className='flex space-x-2 items-center' onClick={handleClick}>
                        <FontAwesomeIcon icon={faSignOut} className="sm:text-2xl text-lg" onClick={handleClick} />
                        <div>
                            <p>Sign Out</p>
                        </div>
                    </div>
                ) : (
                    <div className='space-x-2'>

                        <Link to='/signup'>
                            <button>Register</button>
                        </Link>
                        <Link to='/signin'>
                            <button>Login</button>
                        </Link>
                    </div>
                )}
        </div>
    );
}

export default Navbar;
