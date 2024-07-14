import React from 'react'
import { Link } from 'react-router-dom'
import { GoCommentDiscussion } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { FaRegCheckSquare } from "react-icons/fa";

const Process = () => {
  return (
    <div>
      {/* Process PAge */}
      <section className='p-10 sm:px-20 md:px-28 lg:px-44 grid grid-cols-1 sm:grid-cols-12 py-10 sm:gap-x-4 xl:mx-32'>
        <div className='col-span-12 text-md rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046] mx-auto'>
          <div className='rounded-[calc(1.5rem-2px)] bg-white p-2 text-center'>
              <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
                The Process
              </h3>
          </div>
        </div>
        <h1 className='col-span-12 mt-4 text-center font-bold text-3xl sm:text-4xl'>Our research consultation process</h1>
        
        {/* Main container start */}

        <div className='col-span-12 md:col-span-6 inline-grid grid-cols-6 lg:col-span-6 gap-x-4'>
          
          {/* Meet and discuss card */}
          <div className='col-span-3 mt-6'>
            <div className="max-w-md p-0.5 bg-white border rounded-lg shadow-md bg-gradient-to-r from-[#1CB5E0] to-[#000046]">
              <div className='p-6 rounded-[calc(6px-2px)] bg-white'>
                <div className="mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full">
                  <GoCommentDiscussion alt="Discussion Icon" className="w-6 h-6" />
                  </div>
                </div>
                  <h2 className="mb-2 text-lg font-semibold h-20">Meet and discuss</h2>
                  <Link to='#' className="text-blue-500 hover:underline">Learn more</Link>
              </div>
            </div>
          </div>

          {/* Gather information card */}
          <div className='col-span-3 mt-6'>
            <div className="max-w-md p-0.5 bg-white border rounded-lg shadow-md bg-gradient-to-r from-[#1CB5E0] to-[#000046]">
              <div className='p-6 rounded-[calc(6px-2px)] bg-white'>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full">
                  <IoSearch alt="Icon" className="w-6 h-6" />
                </div>
                </div>
                  <h2 className="mb-2 text-lg font-semibold h-20">Gather needed info</h2>
                  <Link to='#' className="text-blue-500 hover:underline">Learn more</Link>
                </div>
            </div>
          </div>


          {/* Write the proposal card */}
          <div className='col-span-3 mt-6'>
            <div className="max-w-md p-0.5 bg-white border rounded-lg shadow-md bg-gradient-to-r from-[#1CB5E0] to-[#000046]">
              <div className='p-6 rounded-[calc(6px-2px)] bg-white'>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full">
                  <LuFiles alt="Icon" className="w-6 h-6" />
                </div>
                </div>
                  <h2 className="mb-2 text-lg font-semibold h-20">Write the proposal</h2>
                  <Link to='#' className="text-blue-500 hover:underline">Learn more</Link>
                </div>
            </div>
          </div>


          {/* Seek for approval card */}
          <div className='col-span-3 mt-6'>
            <div className="max-w-md p-0.5 bg-white border rounded-lg shadow-md bg-gradient-to-r from-[#1CB5E0] to-[#000046]">
              <div className='p-6 rounded-[calc(6px-2px)] bg-white'>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full">
                  <FaRegCheckSquare alt="Icon" className="w-6 h-6" />
                </div>
                </div>
                  <h2 className="mb-2 text-lg font-semibold h-20">Seek for approval</h2>
                  <Link to='#' className="text-blue-500 hover:underline">Learn more</Link>
                </div>
            </div>
          </div>


        </div>
        {/* Main container start */} 

        <div className='col-span-12 md:col-span-6 h-11/12 w-auto mt-6'>
          <img src='https://plus.unsplash.com/premium_photo-1705267935916-294dfd89c4bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='research' className='rounded-lg h-full object-cover' />
        </div> 

      </section>
    </div>
  )
}

export default Process
