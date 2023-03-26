import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer grid-cols-start md:justify-items-center footerBgImg p-16 object-fill">
                <div>
                    <span className="footer-title">Services</span>
                    <Link >Branding</Link >
                    <Link >Design</Link >
                    <Link >Marketing</Link >
                    <Link >Advertisement</Link >
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link >About us</Link >
                    <Link >Contact</Link >
                    <Link >Jobs</Link >
                    <Link >Press kit</Link >
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link >Terms of use</Link >
                    <Link >Privacy policy</Link >
                    <Link >Cookie policy</Link >
                </div>
            </div>
            <div className='text-center copyright'>&copy; Copyright 2022 All Rights Reserved</div>
        </footer>
    );
};

export default Footer;