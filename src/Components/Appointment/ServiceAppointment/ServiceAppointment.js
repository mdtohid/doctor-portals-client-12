import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const ServiceAppointment = ({service, setTreatment}) => {
    const {name, slots, price} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>{slots.length? slots[0] : <span className='text-rose-600'>no slot available</span>}</p>
                <p>{slots.length} {slots.length>1 ? 'spaces':'space'} available</p>
                <p>Price: ${price}</p>

                <div className="card-actions justify-center mt-4">
                    <label  disabled={slots.length===0}  htmlFor="booking-modal" 
                    onClick={()=>setTreatment(service)} 
                    className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white max-w-48">
                    Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceAppointment;