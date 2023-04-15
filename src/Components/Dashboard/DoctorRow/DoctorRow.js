import React from 'react';

const DoctorRow = ({ doctor, index, setDeleteDoctorBtn, setDeletingDoctor}) => {
    const { name, email, specialty, img } = doctor;

    const handleModel=(email)=>{
        setDeleteDoctorBtn(email);
        setDeletingDoctor(doctor);
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
            </td>
            <td>
                {specialty}
                <br />
                <span className="badge badge-ghost badge-sm">Support</span>
            </td>
            <th>
                <label onClick={()=>handleModel(email)} htmlFor="delete-booking-modal" className="btn btn-error btn-xs">Delete</label>
            </th>
        </tr>
    );
};

export default DoctorRow;