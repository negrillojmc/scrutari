import React from 'react'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <div>
      {/*Stats section */}
      <section className='grid grid-cols-1 sm:grid-cols-12 mt-24 p-10 sm:p-20 md:p-40 lg:p-44 bg-gradient-to-r from-[#1CB5E0] to-[#000046] text-white xl:px-96'>
        <h1 className='col-span-1 sm:col-span-6 md:col-span-8 text-2xl sm:text-4xl font-semibold text-center sm:text-left'>Your growing guide in research writing and innovation.</h1>

        {/* start of the text-button container */}

        <div className='sm:col-span-12 inline-grid sm:grid-cols-6 mt-6'>
          <h3 className='col-span-12 sm:col-span-3 text-center sm:text-left self-center'>Paving the way to your writing journey, one step at a time.</h3>
          <button className='col-span-12 sm:col-span-3 sm:justify-self-end bg-black text-white rounded-3xl px-6 p-3 mt-4 sm:mt-0'>
            <Link to='#'>Submit a proposal</Link>
          </button>
        </div>


        {/* start of the matrix container */}
        <div className='sm:col-span-12 inline-grid sm:grid-cols-12 mt-6 sm:mt-16 text-center justify-items-center'>
          <div className='sm:col-span-3 mb-6'>
            <h1 className='text-8xl font-bold'>8</h1>
            <h3 className='text-sm'>Total submissions</h3>
          </div>
          <div className='sm:col-span-3 mb-6'>
            <h1 className='text-8xl font-bold'>5</h1>
            <h3 className='text-sm'>Published researches</h3>
          </div>
          <div className='sm:col-span-3 mb-6'>
            <h1 className='text-8xl font-bold'>2</h1>
            <h3 className='text-sm'>Years of impact</h3>
          </div>
          <div className='sm:col-span-3 mb-6'>
            <h1 className='text-8xl font-bold'>5</h1>
            <h3 className='text-sm'>Experts to help</h3>
          </div>
        </div>
      </section>      
    </div>
  )
}

export default Stats
