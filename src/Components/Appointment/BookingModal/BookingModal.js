import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment}) => {
    const { _id, name, slots } = treatment;
    const handleBooking =(event)=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const ServiceName = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(slot, ServiceName, email, phone, _id, name);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center mb-4 text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" value={date ? format(date, 'PP') : ' '} disabled className="input input-bordered w-full max-w-xs" />

                        <select name='slot'  className="select select-bordered w-full max-w-xs">
                            {slots.map(slot =>
                                <option value={slot}>{slot}</option>
                            )}
                        </select>

                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" className="input input-bordered bg-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;