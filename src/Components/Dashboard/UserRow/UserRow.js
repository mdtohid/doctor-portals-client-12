import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(data => {
                if (data?.result?.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
                else{
                    console.log(data?.result?.modifiedCount);
                    toast.error('You are not a admin')
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-active">Add Admin</button>}
            </td>
            <td><button className="btn btn-active">Remove User</button>
            </td>
        </tr>
    );
};

export default UserRow;