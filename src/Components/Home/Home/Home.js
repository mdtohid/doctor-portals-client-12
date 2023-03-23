import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import ContractHome from '../ContractHome/ContractHome';
import Footer from '../Footer/Footer';
import LandingHome from '../LandingHome/LandingHome';
import ServicesHome from '../ServicesHome/ServicesHome';
import TestimonialHome from '../TestimonialHome/TestimonialHome';

const Home = () => {
    return (
        <div className=''>
            <LandingHome></LandingHome>
            <ServicesHome></ServicesHome>
            <AppointmentHome></AppointmentHome>
            <TestimonialHome></TestimonialHome>
            <ContractHome></ContractHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;