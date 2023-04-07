import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch}) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const ServiceName = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            refetch();
            setTreatment(null);
            if(data.result){
                toast.success(`Your appointment available in ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appointment on ${data.booking.date} at ${data.booking.slot}`)
            }
        })

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

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map((slot, index) =>
                                <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>
                            )}
                        </select>

                        <input type="text" disabled value={user.displayName} name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs" />

                        <input type="text" disabled value={user.email} name='email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" className="input input-bordered bg-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;