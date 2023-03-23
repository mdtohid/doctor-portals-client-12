import React from 'react';
import doctorImg from '../../../img/doctor-small.png';
import PrimaryButton from '../../Shared/PrimaryButton';
import './AppointmentHome.css';
const AppointmentHome = () => {
    return (
            <div className="flex items-center bgImg p-12 lg:py-0 mb-32 gap-4">
                <div className='flex-1 mt-[-100px] hidden lg:block'>
                    <img src={doctorImg} alt="" />
                </div>
                <div className='text-white flex-1'>
                    <h3 className='text-lime-600 text-lg font-semibold'>Appointment</h3>
                    <h1 className='text-2xl my-2'>Make an appointment Today</h1>
                    <p className='my-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>

    );
};

export default AppointmentHome;