import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user?.email}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin);
            setAdminLoading(false);
        });
    },[user?.email, setAdmin]);

    return [admin, adminLoading];
};

export default useAdmin;