import React from 'react'

const NextStep = () => {
  return (
    <div>
      {/* Next step section */}
      <section className='p-10 sm:px-20 md:px-28 lg:px-44 grid grid-cols-1 sm:grid-cols-12 xl:mx-32'>
        <h1 className='col-span-7 font-black text-6xl'>Ready to take the <span className='bg-gradient-to-r from-[#1CB5E0] to-[#000046] text-transparent bg-clip-text font-extrabold text-6xl inline-block pb-2'>next step towards your career?</span></h1>

        <h3 className='col-span-12 mt-6 font-medium text-lg'>Contact Scrutari today and let us help you pave the way to a brighter future of education.</h3>

        <div className='flex mt-6 gap-x-2'>
          <div className='text-sm rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046]'>
            <div className='rounded-[calc(1.5rem-2px)] bg-white p-2 text-center'>
              <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
                assist@scrutari.com
              </h3>
            </div>
          </div>

          <div className='text-sm rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046]'>
            <div className='rounded-[calc(1.5rem-2px)] bg-white p-2 text-center'>
              <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
                Messenger
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NextStep
