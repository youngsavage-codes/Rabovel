import React from 'react'

const Skeleton = () => {
  return (
    <div className='shadow-sm p-4 rounded-lg mt-5 bg-gray-100 animate-pulse w-full'>
    {/* Image container on the left */}
    <div className='flex items-center gap-4'>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      
      {/* Text container on the right */}
      <div className='flex-1'>
        <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div> {/* Name */}
        <div className="h-5 bg-gray-300 rounded w-[70%]"></div> {/* User role */}
      </div>
    </div>

    {/* Description container at the bottom */}
    <div className="mt-4 h-10 bg-gray-300 rounded w-full"></div>
  </div>
  )
}

export default Skeleton