import React from 'react'
import { Link } from 'react-router-dom'

const Spotlight = () => {
  return (
    <div>
      {/* Spotlight section */}
      <section className='p-10 sm:px-20 md:px-28 lg:px-44 grid grid-cols-1 sm:grid-cols-12 xl:mx-32'>
        <div className='col-span-12 text-md rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046] mr-auto sm:col-span-7'>
          <div className='rounded-[calc(1.5rem-2px)] bg-white p-2 text-center'>
            <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
              Research Spotlight
            </h3>
          </div>
        </div>

        <h1 className='col-span-12 mt-6 text-3xl font-bold'>
          Check our monthly research papers and news
        </h1>

        <div className='col-span-12 inline-grid grid-cols-12 mt-6 gap-4'>
          <div className='col-span-12 sm:col-span-6'>
            <div className='col-span-6 relative overflow-hidden z-[-2]'>
              <img 
                src='https://plus.unsplash.com/premium_photo-1664475638459-3dec00591254?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='brightness-50 rounded-xl shadow-lg h-full object-cover'
                alt='Asian male teacher' />

              <div className='col-span-6'>
                <div className='flex justify-start absolute top-0 left-0 p-6 w-full h-full text-white text-left'>
                  <div className='flex flex-col justify-between'>
                    <p className='border border-gray-300 rounded-3xl px-6 py-1 mr-auto text-sm font-medium'>January 12, 2024</p>
                    <div>
                      <h1 className='font-bold text-lg'>The Educator's Edge: Strategies for Excellence</h1>
                      <p className='mt-1 font-light'>
                        <Link to='#'>
                          Read more •
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>

          <div className='col-span-12 sm:col-span-6'>
            <div className='col-span-6 relative overflow-hidden z-[-2]'>
              <img 
                src='https://images.unsplash.com/photo-1512238972088-8acb84db0771?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='brightness-50 rounded-xl shadow-lg h-full object-cover'
                alt='Asian male teacher' />

              <div className='col-span-6'>
                <div className='flex justify-start absolute top-0 left-0 p-6 w-full h-full text-white text-left'>
                  <div className='flex flex-col justify-between'>
                    <p className='border border-gray-300 rounded-3xl px-6 py-1 mr-auto text-sm font-medium'>February 12, 2024</p>
                    <div>
                      <h1 className='font-bold text-lg'>Publish & Thrive: Your Guide to Research Success</h1>
                      <p className='mt-1 font-light'>
                        <Link to='#'>
                          Read more •
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>

        </div>



      </section>  
    </div>
  )
}

export default Spotlight
