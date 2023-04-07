import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if(user){
        return children;
    }

    if(loading){
        return (<Loading></Loading>);
    }

    if (!user) {
        // console.log('why');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default RequireAuth;