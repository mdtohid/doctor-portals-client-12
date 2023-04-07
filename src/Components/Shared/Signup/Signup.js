import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { async } from '@firebase/util';
import Loading from '../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name});
        console.log(data.name, data.email, data.password);
        navigate('/appointment');
    }

    if(user||gUser){
        console.log(user);
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let signInError

    if (error || gError || updateError) {
        signInError = <p>{error?.message || gError?.message || updateError?.message}</p>
        console.log(error?.message || gError?.message || updateError?.message)
    }
    return (
        <div className='loginHeight flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Sign Up</h2>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'provide password'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be enter 6 digit or longer'
                                        }
                                    }
                                )}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" value='SIGN UP'
                            className="btn w-full" />
                        {signInError}

                        <p className='text-center'><small>Already have an account?<Link
                        className='text-secondary' to='/login'>Login</Link></small></p>
                    </form>




                    <div className="divider">OR</div>
                    <div className="card-actions justify-center">
                        <button className="btn w-full bg-white text-slate-800
                        hover:text-white"
                            onClick={() => signInWithGoogle()}
                        >CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;