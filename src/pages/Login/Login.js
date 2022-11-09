import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { login } = useContext(AuthContext);
    const Navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
        login(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            Navigate('/');
            
    
            // const currentUser = { email: user.email }
            // console.log(currentUser);
            
            //Get JWT Toke
    
            // fetch('https://genius-car-server-two-ivory.vercel.app/jwt', {
            //   method: 'POST',
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify(currentUser)
            // })
            //   .then(res => res.json())
            //   .then(data => {
            //     console.log(data);
            //     localStorage.setItem('genius-token', data.token)
            //     Navigate(from, { replace: true })
            //   })
    
          })
          .then(err => {
            console.error(err);
          })
      }
    return (
        <div className="hero my-20 flex ml-96">
      <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-10 w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center'>New to Mental Press <Link to='/signup' className='text-bold text-orange-600'>Sign Up</Link></p>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    );
};

export default Login;