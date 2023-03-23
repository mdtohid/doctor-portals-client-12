import React from 'react';
import landingChair from '../../../img/chair.png';
import clockLanding from '../../../img/clockLanding.svg';
import markerLanding from '../../../img/marker.svg';
import phoneLanding from '../../../img/phone.svg';
import PrimaryButton from '../../Shared/PrimaryButton';
import './LandingHome.css';
const LandingHome = () => {
    return (
        <div className='mb-32 px-12'>
            <div className="hero lg:min-h-screen landingBgImg mb-8 md:mb-24">
                <div className="hero-content p-0 flex-col md:flex-row-reverse gap-6">
                    <img src={landingChair} className="lg:max-w-xl sm:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:max-w-xl'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>

            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-1'>
                <div className='card shadow-xl md:flex-row sm:flex-col p-7 gap-5 items-center text-white m-0 bg-gradient-to-r from-secondary to-primary'>
                    <img src={clockLanding} alt="" />
                    <div>
                        <h1 className='card-title mb-2'>Opening hours</h1>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                
                <div className='card bg-gray-600 shadow-xl md:flex-row sm:flex-col p-7 gap-5 items-center text-white m-0'>
                    <img src={markerLanding} alt="" />
                    <div>
                        <h1 className='card-title mb-2'>Opening hours</h1>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>

                <div className='card shadow-xl md:flex-row sm:flex-col p-7 gap-5 items-center text-white m-0 bg-gradient-to-r from-secondary to-primary'>
                    <img src={phoneLanding} alt="" />
                    <div>
                        <h1 className='card-title mb-2'>Opening hours</h1>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LandingHome;