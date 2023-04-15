import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async (data) => {
        const imageStorageKey = 'cb8161322f8142bb5127d0543dd8ddc3';
        const formData = new FormData();
        const image = data.image[0];
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
            method: "POST",
            body: formData,
        })
        .then(res=>res.json())
        .then(result=>{
            const img = result.data.display_url;
            const doctor = {
                name:data.name,
                email:data.email,
                specialty:data.specialty,
                img:img
            }

            fetch('http://localhost:5000/doctor',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor),
            })
            .then(res=>res.json())
            .then(inserted=>{
                if(inserted.insertedId){
                    toast.success('Doctor added successfully');
                    reset();
                }
                else{
                    toast.error('Failed to add the doctor');
                }
            });
        })
    }

    const { isLoading, error, data: services } = useQuery({
        queryKey: ['service'],
        queryFn: () =>
            fetch('http://localhost:5000/service').then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-100'>
            <h1 className='text-2xl'>Add a doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: 'provide name'
                                },
                            }
                        )}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: 'provide email'
                                },
                                pattern: {
                                    value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                                    message: 'Invalid email address'
                                }
                            }
                        )}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty",
                        {
                            required: {
                                value: true,
                                message: 'Specialization is required'
                            }
                        }
                    )}
                        className="select select-bordered w-full max-w-xs">
                        {
                            services.map(service =>
                                <option value={service.name} key={service._id}>
                                    {service.name}
                                </option>
                            )
                        }
                    </select>
                    <label className="label">
                        {errors.specialty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}
                        {errors.specialty?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file"
                        placeholder="Enter your image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image",
                            {
                                required: {
                                    value: true,
                                    message: 'provide image'
                                },
                            }
                        )}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input type="submit" value='Add'
                    className="btn w-full" />
            </form>
        </div>
    );
};

export default AddDoctor;