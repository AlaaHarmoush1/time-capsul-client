import React from 'react'

const CapyRights = () => {


    const currentYear = new Date().getFullYear();
  return (
    <div className='w-full bg-white py-4 px-6 border-t border-gray-200 flex items-center justify-center'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            &copy; {currentYear} TimeCapsule. All rights reserved.
          </p>
        </div>
    </div>
  )
}

export default CapyRights