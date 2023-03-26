import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import CalenderAppointment from '../CalenderAppointment/CalenderAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className=''>
            <CalenderAppointment date={date} setDate={setDate}></CalenderAppointment>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;