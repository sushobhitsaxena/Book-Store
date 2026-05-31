import React from 'react'

function Baner() {
  return (
    <>
      {/* Hero Section */}
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between my-10'>

        {/* Left Section */}
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>

          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Hello, welcomes here to learn
            <span className='text-pink-500'> something new everyday!!!</span>
          </h1>

          <p className='text-xl text-gray-600 mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor, et totam. Tempora amet atque expedita, quae corrupti
            totam sed pariatur corporis at veniam est voluptas animi!
          </p>

          {/* Input Box */}
          <div className='mt-10'>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555Z" />
                <path d="M0 4.697v7.104l5.803-3.558L0 4.697Z" />
                <path d="M6.761 8.83 0 12.97A2 2 0 0 0 2 14h12a2 2 0 0 0 2-1.03L9.239 8.83 8 9.586 6.761 8.83Z" />
                <path d="M16 4.697 10.197 8.243 16 11.801V4.697Z" />
              </svg>

              <input
                type="text"
                className="grow outline-none"
                placeholder="Enter your email to login"
              />
            </label>
          </div>

          {/* Button */}
          <button className='bg-pink-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-pink-600 duration-300'>
            Secondary
          </button>

        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-0'>

          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className='w-[90%] md:w-[550px]'
          />

        </div>

      </div>

      {/* Bottom Section */}
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 mb-20'>

        <h2 className='text-3xl font-bold'>
          Free Offered Books to Enjoy.
        </h2>

        <p className='text-gray-600 mt-4 text-lg'>
          
        </p>


 

  <span
    className='
      bg-gradient-to-r 
      from-yellow-500 
      via-amber-400 
      to-yellow-600 
      bg-clip-text 
      text-transparent
      drop-shadow-[0_2px_8px_rgba(255,215,0,0.7)]
    '
  >
   MERE  KABRR PR AYEE WO APNE HUMSAFAR KE SATH ..... MERE KABR PR AYEE WO APNE HMSAFAR KE SATH AUR LOGG KHETE HAI DAFAN KARNE KE BADD JALAYA NHI JA SAKTA .......!!!
  </span>


<span
    className='
      bg-gradient-to-r 
      from-yellow-500 
      via-amber-400 
      to-yellow-600 
      bg-clip-text 
      text-transparent
      drop-shadow-[0_2px_8px_rgba(255,215,0,0.7)]
    '
  >
   MERE  KABRR PR AYEE WO APNE HUMSAFAR KE SATH ..... MERE KABR PR AYEE WO APNE HMSAFAR KE SATH AUR LOGG KHETE HAI DAFAN KARNE KE BADD JALAYA NHI JA SAKTA .......!!!
  </span>



      </div>

      
    </>
  )
}

export default Baner