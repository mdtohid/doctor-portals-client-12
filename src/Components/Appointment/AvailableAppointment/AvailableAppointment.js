import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import ServiceAppointment from '../ServiceAppointment/ServiceAppointment';

const AvailableAppointment = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState(null);

    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate]);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch} = useQuery({
        queryKey: ["available" ,formattedDate],
        queryFn:()=>fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='px-12 mb-12'>
            <h1 className='text-lg font-semibold text-center text-secondary'>Available appointment on {date ? format(date, 'PP') : ' '}.</h1>
            <h1 className='text-gray-400 text-center font-semibold'>Please select a service.</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceAppointment key={service._id} service={service} setTreatment={setTreatment}></ServiceAppointment>)
                }
            </div>
            {treatment &&
                <BookingModal treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;