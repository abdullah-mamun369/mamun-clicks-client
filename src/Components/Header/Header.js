import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='bg-slate-100 shadow-lg'>
            <div className=''>
                <div className="navbar">
                    {/* mobile Nav */}
                    <div className='dropdown'>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <div>
                                <Link to="/login"><button className='btn my-2 btn-primary block'>Login</button></Link>
                                <Link to="/register"><button className='btn mx-y btn-primary'>Register</button></Link>
                            </div>
                        </ul>

                    </div>
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl"><span className='text-2xl'>Mamun</span>Clicks</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    {/* User Profile Bubble */}

                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link to="/addservice">Add Service</Link></li>
                                <li><Link to="/orders">Orders</Link></li>
                                <li><Link to="/myreviews" className='mb-3'>My Reviews</Link></li>
                                <li><button className='btn btn-outline btn-primary' onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                            :
                            <div className='hidden lg:flex'>
                                <Link to="/login"><button className='btn mx-2'>Login</button></Link>
                                <Link to="/register"><button className='btn mx-2'>Register</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;