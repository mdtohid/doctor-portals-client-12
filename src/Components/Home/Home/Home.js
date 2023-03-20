import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import LandingHome from '../LandingHome/LandingHome';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <LandingHome></LandingHome>
            <ServicesHome></ServicesHome>
        </div>
    );
};

export default Home;