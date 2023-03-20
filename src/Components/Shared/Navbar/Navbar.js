import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const menuItems =
        <>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Appointment</a></li>
            <li><a>Reviews</a></li>
            <li><a>Contract us</a></li>
            <li><a>Login</a></li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start lg:ml-24">
                <a className=" normal-case text-xl">Doctors portal</a>
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