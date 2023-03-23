import React from 'react';
import services1 from '../../../img/fluoride1.png';
import services2 from '../../../img/cavity2.png';
import services3 from '../../../img/whitening3.png';
import treatment from '../../../img/treatment.png';
import PrimaryButton from '../../Shared/PrimaryButton';
const ServicesHome = () => {
    return (
        <div className='px-12 mb-32'>
            <h3 className='text-lg text-center text-secondary font-bold'>OUR SERVICES</h3>
            <h1 className='text-3xl text-center'>Services We Provide</h1>

            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-16'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className='py-9'><img src={services1} alt="Shoes" /></figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="text-xl font-semibold">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className='py-9'><img src={services2} alt="Shoes" /></figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="text-xl font-semibold">Cavity Filling</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className='py-9'><img src={services3} alt="Shoes" /></figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="text-xl font-semibold">Teeth Whitening</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>

            <div className='lg:m-40 flex flex-col md:flex-row items-center gap-24'>
                <img className='md:max-w-md rounded-md' src={treatment} alt="" srcset="" />
                <div>
                    <h1 className='text-4xl font-semibold mb-4'>Exceptional Dental Care, on Your Terms</h1>
                    <p className='mb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;