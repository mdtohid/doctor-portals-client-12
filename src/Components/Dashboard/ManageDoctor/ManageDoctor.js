import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import DeleteBooking from '../DeleteBooking/DeleteBooking';
import DoctorRow from '../DoctorRow/DoctorRow';

const ManageDoctor = () => {
    const [deleteDoctorBtn, setDeleteDoctorBtn] = useState(null);
    const [deletingDoctor, setDeletingDoctor] = useState({});
    const { isLoading, error, data: doctors, refetch } = useQuery({
        queryKey: ['doctor'],
        queryFn: () =>
            fetch('http://localhost:5000/doctor', {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto w-8/12">
            <h1 className='text-2xl my-5'>Manage Doctor {doctors.length}</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors?.map((doctor, index) => <DoctorRow key={index} index={index} doctor={doctor} refetch={refetch} setDeleteDoctorBtn={setDeleteDoctorBtn}
                        setDeletingDoctor={setDeletingDoctor}
                        ></DoctorRow>)
                    }
                </tbody>
            </table>
            {deleteDoctorBtn && <DeleteBooking deletingDoctor={deletingDoctor} refetch={refetch}></DeleteBooking>}
        </div>
    );
};

export default ManageDoctor;