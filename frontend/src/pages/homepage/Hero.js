import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      {/* Hero Page */}
      <section className='p-10 sm:px-20 md:px-28 lg:px-44 grid grid-cols-1 sm:grid-cols-12 xl:mx-60'>
        <div className='col-span-12 text-md rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046] mr-auto sm:col-span-7'>
          <h3 className='rounded-[calc(1.5rem-2px)] p-2 bg-white text-center'>
            <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
              Researching tailored for you
            </h3>
          </h3>
        </div>

        <h1 className='col-span-12 font-extrabold text-6xl mt-6 pb-2'>Turn your <span className='bg-gradient-to-r from-[#1CB5E0] to-[#000046] text-transparent bg-clip-text font-extrabold text-6xl inline-block pb-2'>ideas into reality. </span></h1>

        <p className='col-span-12 text-sm mt-4 md:inline-grid md:grid-cols-2 lg:grid-cols-2.5'>Ignite positive change by joining a dynamic community where groundbreaking ideas flourish and your contributions have the power to shape a brighter future.</p>

        <button className='col-span-12 sm:col-span-3 text-sm mt-10 bg-black text-white rounded-3xl p-3'>
          <Link to='#'>Explore paths</Link>
          </button>
        
        <div className='my-10 col-span-12'>
          <img src='https://plus.unsplash.com/premium_photo-1664475623561-8327d468bf5c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='research' className='w-full rounded-lg' />
        </div>

      </section>
    </div>
  )
}

export default Hero
