import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import ServiceAppointment from '../ServiceAppointment/ServiceAppointment';

const AvailableAppointment = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='px-12 mb-12'>
            <h1 className='text-lg font-semibold text-center text-secondary'>Available appointment on {date ? format(date, 'PP') : ' '}.</h1>
            <h1 className='text-gray-400 text-center font-semibold'>Please select a service.</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceAppointment key={service._id} service={service} setTreatment={setTreatment}></ServiceAppointment>)
                }
            </div>
            {treatment &&
                <BookingModal treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;