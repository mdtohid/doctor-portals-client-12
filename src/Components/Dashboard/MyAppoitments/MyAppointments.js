import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import DeleteBooking from '../DeleteBooking/DeleteBooking';

const MyAppointments = () => {
    const [user, loading, error] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut();
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => setAppointment(data));
        }
    }, [user, user.email]);
    return (
        <div className='mt-5'>
            <h1 className='text-xl my-2'>My appointment {appointment.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            appointment.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {
                                            (a.price && !a.paid) && <Link
                                                to={`/dashboard/payment/${a._id}`}
                                                className='btn btn-xs btn-success'>
                                                Payment
                                            </Link>
                                        }
                                        {
                                            (a.price && a.paid) && <div>
                                                <span
                                                    className='text-success'>
                                                    Paid
                                                </span>
                                                <p
                                                    className='text-success'>
                                                    Transaction Id:  
                                                    <span
                                                        className='text-warning ml-1'>
                                                        {a.transactionId}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;