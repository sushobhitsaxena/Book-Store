import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

function Login() {
const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <dialog id="my_modal_1" className="modal">

        <div className="modal-box">

          <h3 className="font-bold text-2xl text-center">
            Login
          </h3>

          {/* Email */}
          <div className="mt-4">

            <label className="label">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white text-black placeholder:text-gray-500"
              {...register("email", { required: "email is required" })}
            />

            {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email.message}
  </p>)}

          </div>

          {/* Password */}
          <div className="mt-4">

            <label className="label">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-white text-black placeholder:text-gray-500"
              {...register("password", { required: "password is required" })}
            />

            {errors.password && (
  <p className="text-red-500 text-sm mt-1">
    {errors.password.message}
  </p>
)}

          </div>

          {/* Buttons */}
          <div className="modal-action">

            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">

              <button
                className="
                  btn
                  bg-pink-500
                  hover:bg-pink-600
                  text-white
                  border-none
                  px-6
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Login
              </button>

              <button
  type="button"
  className="btn"
  onClick={() => document.getElementById('my_modal_1').close()}
>
  Close
</button>

            </form>

          </div>

          {/* Signup Link */}
          <p className="text-center mt-4 text-sm bg-white text-black">

            Not registered yet?{" "}

            <Link
              to="/signup"
              className="text-pink-500 font-semibold hover:underline"
            >
              Signup
            </Link>

          </p>

        </div>

      </dialog>
    </>
  )
}

export default Login