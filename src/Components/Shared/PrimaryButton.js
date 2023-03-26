import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white max-w-48">{children}</button>
    );
};

export default PrimaryButton;