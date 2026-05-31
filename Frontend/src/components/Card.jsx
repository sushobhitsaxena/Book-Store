import React from 'react'

function Card({ item }) {

  return (
    <>
      <div className='card bg-base-100 shadow-xl hover:scale-105 duration-300 border'>

        {/* Image */}
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className='h-60 w-full object-cover'
          />
        </figure>

        {/* Card Body */}
        <div className='card-body'>

          {/* Book Name */}
          <h2 className='card-title'>
            {item.name}
          </h2>

          {/* Title */}
          <p className='text-gray-500'>
            {item.title}
          </p>

          {/* Category + Price */}
          <div className='flex justify-between items-center mt-4'>

            <span className='badge badge-secondary'>
              {item.category}
            </span>

            <span className='text-pink-500 font-bold text-lg'>
              ₹{item.price}
            </span>

          </div>

          {/* Button */}
          <div className='card-actions justify-end mt-4'>

            <button className='btn btn-primary'>
              Read Now
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default Card