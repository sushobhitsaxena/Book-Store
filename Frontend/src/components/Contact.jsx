import React from 'react'
import { Link } from "react-router-dom"

function Contact() {

  return (

    <div className="min-h-screen bg-base-200 py-16 px-4">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl font-extrabold leading-tight">

            Get in{" "}

            <span className="text-pink-500">
              Touch
            </span>

          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">

            We'd love to hear from you. Whether you have a question,
            feedback, or just want to say hello — feel free to contact us.

          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">

              <div className="bg-pink-500 p-3 rounded-full text-white">

                📧

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-gray-500">
                  support@bookstore.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-pink-500 p-3 rounded-full text-white">

                📞

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +91 9876543210
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-pink-500 p-3 rounded-full text-white">

                📍

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Address
                </h3>

                <p className="text-gray-500">
                  Lucknow, Uttar Pradesh, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-2xl rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-center text-black">

            Contact Us

          </h2>

          {/* Name */}
          <div className="mt-6">

            <label className="label text-black font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
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
            />

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
            />

          </div>

          {/* Message */}
          <div className="mt-4">

            <label className="label text-black font-medium">
              Message
            </label>

            <textarea
              placeholder="Write your message..."
              rows="5"
              className="
                textarea
                textarea-bordered
                w-full
                bg-white
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-pink-400
              "
            ></textarea>

          </div>

          {/* Button */}
          <div className="mt-6">

            <button
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
              Send Message
            </button>

          </div>

          {/* Back Home */}
          <div className="text-center mt-5">

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

    </div>
  )
}

export default Contact