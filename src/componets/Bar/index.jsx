import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <header className='bg-gray-50'>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:justify-between sm:items-center sm:flex">
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                La melmelada meals 🎉🎉!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default index