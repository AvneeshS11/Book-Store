import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

const Singup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div id="" className="flex h-screen justify-center items-center dark:text-black">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                    <h3 className="font-bold text-lg">Sing-up</h3>
                    <div className='mt-4 space-y-2'>
                        <div>Name</div>
                        <input {...register("text", { required: true })} type="text" placeholder='Enter your Name' className='w-80 px-3 border rounded-md outline-none' />
                        <br />
                        {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <div>E-mail</div>
                        <input {...register("email", {required: true })} type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none' />
                        <br />
                        {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <div>Password</div>
                        <input {...register("password", { required: true })} type="password" placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none' />
                        <br />
                        {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className="bg-pink-500 text-white px-3 rounded-md py-1">Sing-up</button>
                        <p>Have account?{" "}
                            <button onClick={() => document.getElementById("my_modal_3").showModal()} className='underline cursor-pointer text-blue-700'>Log-in</button>
                            <Login /></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Singup