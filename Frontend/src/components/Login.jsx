import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch("example"));
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
              <h3 className="font-bold text-lg">Log-in</h3>
              <div className='mt-4 space-y-2'>
                <div>E-mail</div>
                <input {...register("email", { required: true })} type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none' />
                <br />
                {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <div>Password</div>
                <input
                  type="password" placeholder='Enter your password'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                <br />
              {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button className="bg-pink-500 text-white px-3 rounded-md py-1">Log-in</button>
                <p>Not registered?{" "}
                  <Link to={"/singup"} className='underline cursor-pointer text-blue-700'>Signup</Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  )
}
export default Login