import React from 'react'
import List from "../../public/list.json"
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Courses() {

  // Filter Only Paid Books
  const filterData = List.filter(
    (data) => data.category === "Paid"
  )

  return (
    <>
    
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className='relative overflow-hidden'>

        {/* Background Gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-10'></div>

        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-24 relative z-10'>

          <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

            {/* Left Content */}
            <div className='md:w-1/2'>

              <span className='bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold'>
                Premium Learning Platform
              </span>

              <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mt-6'>

                Discover The
                <span className='text-pink-500'> Best Premium </span>
                Books Collection

              </h1>

              <p className='mt-8 text-lg text-gray-500 leading-8'>

                Explore top-rated novels, self-improvement books,
                business guides and learning resources curated
                specially for passionate readers and learners.

              </p>

              {/* Buttons */}
              <div className='flex gap-5 mt-10'>

                <button className='btn btn-primary px-8 text-white'>
                  Explore Now
                </button>

                <Link to="/">
                  <button className='btn btn-outline btn-secondary px-8'>
                    Back Home
                  </button>
                </Link>

              </div>

              {/* Stats */}
              <div className='flex gap-10 mt-12'>

                <div>
                  <h2 className='text-4xl font-bold text-pink-500'>
                    10K+
                  </h2>

                  <p className='text-gray-500'>
                    Active Readers
                  </p>
                </div>

                <div>
                  <h2 className='text-4xl font-bold text-purple-500'>
                    500+
                  </h2>

                  <p className='text-gray-500'>
                    Premium Books
                  </p>
                </div>

                <div>
                  <h2 className='text-4xl font-bold text-indigo-500'>
                    4.9★
                  </h2>

                  <p className='text-gray-500'>
                    User Rating
                  </p>
                </div>

              </div>

            </div>

            {/* Right Image */}
            <div className='md:w-1/2 flex justify-center'>

              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
                alt="Books"
                className='rounded-3xl shadow-2xl w-full max-w-xl hover:scale-105 duration-500'
              />

            </div>

          </div>

        </div>

      </div>

      {/* Premium Books Section */}
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-20'>

        {/* Section Heading */}
        <div className='text-center mb-16'>

          <h1 className='text-5xl font-bold'>

            Our Premium
            <span className='text-pink-500'> Collection</span>

          </h1>

          <p className='mt-5 text-lg text-gray-500 max-w-2xl mx-auto'>

            Handpicked premium books designed to inspire,
            educate and transform your reading journey.

          </p>

        </div>

        {/* Premium Books Horizontal Slider */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-4">

          <div className="flex gap-8">

            {filterData.map((item) => (

              <div
                key={item.id}
                className="min-w-[320px] inline-block hover:-translate-y-3 duration-300"
              >

                <Card item={item} />

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Newsletter Section */}
      <div className='bg-gradient-to-r from-pink-500 to-purple-600 py-20 text-white'>

        <div className='max-w-screen-xl mx-auto text-center px-4'>

          <h1 className='text-5xl font-bold'>
            Join Our Reading Community
          </h1>

          <p className='mt-6 text-lg text-gray-100 max-w-2xl mx-auto'>

            Subscribe to get updates about newly released books,
            exclusive offers and premium learning resources.

          </p>

          {/* Input */}
          <div className='flex flex-col md:flex-row justify-center gap-4 mt-10'>

            <input
              type="email"
              placeholder="Enter your email"
              className='px-6 py-4 rounded-xl text-black w-full md:w-[400px] outline-none'
            />

            <button className='btn btn-secondary px-8 text-white'>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </>
  )
}

export default Courses