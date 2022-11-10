import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import img from '../../assets/images/2.png';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const loaction = useLocation();

    const from = loaction.state?.from?.pathname || '/';

    const { login, providerLogin } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error));
    }



    // login with google handle
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                // setError(error.message)
            })
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {/* {
                                error && <>
                                    <p className='text-center text-red-600'>{error}</p>
                                </>
                            } */}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-center'>Login with</p>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline"> <span className='mx-2'> <BsGoogle /></span> Login with Google</button>
                            </div>
                            <div className='mt-2'>
                                <p><small>Don't have an account? <Link className='text-cyan-700 font-medium' to="/signup"> Register here</Link></small></p>
                            </div>
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;