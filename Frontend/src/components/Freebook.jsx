import React from 'react'
import List from "../../public/list.json"
import Card from './Card'

function Freebook() {

  // Filter Only Free Books
  const filterData = List.filter((data) => data.category === "Free")

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10'>

        {/* Heading */}
        <div className='mb-8'>

          <h1 className='text-4xl font-bold'>
            Free Books
          </h1>

          <p className='text-gray-500 mt-2'>
            Explore our free collection
          </p>

        </div>

        {/* Slider Section */}
        <div className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth pb-4">

          {filterData.map((item) => (

            <div
              key={item.id}
              className="min-w-[320px] flex-shrink-0"
            >

              {/* Separate Card Component */}
              <Card item={item} />

            </div>

          ))}

        </div>

      </div>
    </>
  )
}

export default Freebook