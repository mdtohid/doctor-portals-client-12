import React, { useState } from 'react';
import chair from '../../../img/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './CalenderAppointment.css';

const CalenderAppointment = ({date, setDate}) => {
    return (
            <div className='calenderBgImg lg:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-32 px-12 lg:px-40'>
                <div className=''>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
                <div className="max-w-xl">
                    <img src={chair} alt='' />
                </div>
            </div>
    );
};

export default CalenderAppointment;