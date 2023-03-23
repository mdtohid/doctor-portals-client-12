import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import './ContractHome.css';
const ContractHome = () => {
    return (
        <div className='contractBgImg text-center py-16'>
            <h3 className='text-lime-600 text-lg font-semibold mb-2'>Contact Us</h3>
            <h1 className='text-white text-4xl mb-4'>Stay connected with us</h1>
            <div>
                <input type="email" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs md:max-w-md my-2" /><br />

                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs md:max-w-md my-2" /><br />

                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-xs md:max-w-md my-2" ></textarea><br />

                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default ContractHome;