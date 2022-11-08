import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assest/header.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch()
  }

    return (
        <div className='flex'>
            <div>
                <Link to='/'><img src={img} alt="" /></Link>
            </div>
            {/* <div>
                <p>Home</p>
                <div>
                    <p>Miapure, Mirerpara</p>
                    <p>Bejumgonj, Noakhali</p>
                </div>
                </div>
                <div>
                    <p>Time</p>
                    <div>
                        <p>mon-sat, 9.00-5.00</p>
                        <p>sat closed</p>
                    </div>
                </div> */}
                <div className='justify-end'>
                    <Link to='/allServices'>Services</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signUp'>Sign Up</Link>
                    <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
                    <img src={user?.email} alt="" />
                </div>
        </div>
    );
};

export default Header;