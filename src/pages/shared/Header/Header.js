import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assest/header.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className='flex justify-between my-5'>
            <div>
                <Link to='/'><img src={img} alt="" /></Link>
            </div>
            <div>
                <Link to='/allServices'><button className='btn btn-ghost ml-3 text-xl'>Services</button></Link>
                <Link to='/blog'><button className='btn btn-ghost ml-3 text-xl'>Blogs</button></Link>
                {
                    user?.email ?
                        <>
                            <Link to='/myReview'><button className='btn btn-ghost ml-2 text-xl'>My reviews</button></Link>
                            <Link to='/addService'><button className='btn btn-ghost ml-2 text-xl'>Add service</button></Link>
                            <button onClick={handleLogOut} className='btn btn-ghost ml-2 text-xl'>Sign Out</button>
                            <p>{user?.photoURL ? user.photoURL : ''}</p>
                        </>
                        :
                        <>
                        <Link to='/login'><button className='btn btn-ghost ml-3 text-xl'>Login</button></Link>
                        <Link to='/signUp'><button className='btn btn-ghost ml-3 text-xl'>Sign Up</button></Link>
                        </>
                        
                }
                
            </div>
        </div>
    );
};

export default Header;