import React from 'react'

const WhoAreWe = () => {
  return (
    <div>
     {/* Who are we Section */}
     <section className='p-10 sm:px-20 md:px-28 lg:px-44 mt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6'>
          <div className='col-span-1 text-md rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046] mx-auto self-start'>
            <h3 className='rounded-[calc(1.5rem-2px)] p-2 bg-white text-center'>
              <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
                  What are we known for
              </h3>
            </h3>
          </div>
          <h1 className='col-span-2 self-start text-xl md:text-2xl font-bold text-center lg:text-left'>We are a leader in IRES educational research, <span className='bg-gradient-to-r from-[#1CB5E0] to-[#000046] bg-clip-text text-transparent'>providing faculty with the tools, mentorship, and publishing support </span>they need to disseminate impactful findings and shape the future of educational research experiences in our school.</h1>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-10 pt-6'>
          <div className='col-span-1'>
            <img src='https://plus.unsplash.com/premium_photo-1661310170787-948899f2f3d9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='lady browsing her phone' className='w-full h-80 object-cover rounded-lg shadow-lg mb-2' />
            <p className='bg-gradient-to-r bg-clip-text from-[#1CB5E0] to-[#000046] text-sm'>Free Resources</p>
            <h1 className='font-bold text-lg'>No hidden costs</h1>
          </div>
          <div className='col-span-1'>
            <img src='https://plus.unsplash.com/premium_photo-1661281234131-5a81d87a4d2a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='man writing in a computer' className='w-full h-80 object-cover rounded-lg shadow-lg mb-2' />
            <p className='bg-gradient-to-r bg-clip-text from-[#1CB5E0] to-[#000046] text-sm'>Guided Chapters</p>
            <h1 className='font-bold text-lg'>Writing support</h1>
          </div>
          <div className='col-span-1'>
            <img src='https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='man showing statistics' className='w-full h-80 object-cover rounded-lg shadow-lg mb-2' />
            <p className='bg-gradient-to-r bg-clip-text from-[#1CB5E0] to-[#000046] text-sm'>Writing and Data Help</p>
            <h1 className='font-bold text-lg'>Statistical expertise</h1>
          </div>


        </div>


      </section>
    </div>
  )
}

export default WhoAreWe
