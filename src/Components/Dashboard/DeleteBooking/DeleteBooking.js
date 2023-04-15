import React from 'react';
import { toast } from 'react-toastify';

const DeleteBooking = ({ deletingDoctor, refetch }) => {

    const handleDoctorDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Remove successfully');
                }
                else {
                    toast.error('failed to remove')

                }
            });
    };
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="delete-booking-modal" className="modal-toggle" />
            <div className="modal bg-inherit">
                <div className="modal-box">
                    <label htmlFor="delete-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">You want to delete it!!!</h3>
                    <p className="py-4">If you delete it you can not get it anymore.</p>
                    <div className="modal-action">
                        <label onClick={() => handleDoctorDelete(deletingDoctor.email)} htmlFor="delete-booking-modal" className="btn btn-error">Delete confirm!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBooking;