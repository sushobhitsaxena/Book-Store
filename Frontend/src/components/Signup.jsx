import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

function Signup() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">

        {/* Heading */}
        <h3 className="font-bold text-3xl text-center text-black">
          Signup
        </h3>

        <p className="text-center text-gray-500 mt-2">
          Create your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div className="mt-5">

            <label className="label text-black font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="
                input
                input-bordered
                w-full
                bg-white
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-pink-400
              "
              {...register("fullname", {
                required: "Full name is required"
              })}
            />

            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}

          </div>

          {/* Email */}
          <div className="mt-4">

            <label className="label text-black font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                input
                input-bordered
                w-full
                bg-white
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-pink-400
              "
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}
          <div className="mt-4">

            <label className="label text-black font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="
                input
                input-bordered
                w-full
                bg-white
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-pink-400
              "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Confirm Password */}
          <div className="mt-4">

            <label className="label text-black font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="
                input
                input-bordered
                w-full
                bg-white
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-pink-400
              "
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match"
              })}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}

          </div>

          {/* Signup Button */}
          <div className="mt-6">

            <button
              type="submit"
              className="
                btn
                w-full
                bg-pink-500
                hover:bg-pink-600
                text-white
                border-none
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Signup
            </button>

          </div>

        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-5">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-pink-500 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

        {/* Back to Home */}
        <div className="text-center mt-3">

          <Link
            to="/"
            className="
              text-gray-500
              hover:text-pink-500
              text-sm
              transition-all
              duration-300
            "
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Signup