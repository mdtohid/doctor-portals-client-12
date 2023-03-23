import React from 'react';
import quote from '../../../img/quote.svg';
import people1 from '../../../img/people1.png';
const TestimonialHome = () => {
    return (
        <div className='px-12 mb-32'>
            {/* <div className='relative'>
                <img className="w-48 absolute top-0 right-0" src={quote} alt="" />
            </div> */}
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-lg text-emerald-400	 font-semibold'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <img className="w-48" src={quote} alt="" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-20'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                        <div className='flex items-center gap-4 mt-6'>
                            <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='w-16' src={people1} alt='' />
                            </div>

                            <div>
                                <h3>Winson Herry</h3>
                                <h5>California</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                        <div className='flex items-center gap-4 mt-6'>
                            <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='w-16' src={people1} alt='' />
                            </div>

                            <div>
                                <h3>Winson Herry</h3>
                                <h5>California</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                        <div className='flex items-center gap-4 mt-6'>
                            <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='w-16' src={people1} alt='' />
                            </div>

                            <div>
                                <h3>Winson Herry</h3>
                                <h5>California</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialHome;