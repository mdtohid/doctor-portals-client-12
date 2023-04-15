import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './Navbar.css';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
    const logOut = async () => {
        localStorage.removeItem('accessToken');
        await signOut();
    }
    if (loading || loadingSignOut) {
        <Loading></Loading>
    }
    if (error || errorSignOut) {
        console.log(error || errorSignOut);
    }
    const menuItems =
        <>
            <li><Link to='/'>Home</Link ></li>
            <li><Link >About</Link ></li>
            <li><Link to='/appointment'>Appointment</Link ></li>
            <li><Link >Reviews</Link ></li>
            <li><Link >Contract us</Link ></li>
            {
                user && <li><Link to='/dashboard'>Dashboard</Link ></li>
            }
            <li >{user ?
                <Link onClick={logOut} className='btn btn-active btn-ghost' to='/login'>Sign Out</Link>
                :
                <Link to='/login'>Login</Link >
            }</li>
        </>
    return (
        <div className="navbar bg-base-100">
            <label htmlFor="my-drawer-2" className="btn btn-primary
            bg-gradient-to-r from-primary to-secondary text-white max-w-48 mr-3 drawer-button lg:hidden">Open drawer</label>

            <div className="navbar-start lg:ml-24">
                <Link className=" normal-case text-xl">Doctors portal</Link >
            </div>

            {/* sm breakpoint responsive   */}
            <div className='navbar-end'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>

            {/* lg breakpoint responsive */}
            <div className="hidden lg:flex md:mr-20">
                <ul className="menu menu-horizontal px-1 ">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;