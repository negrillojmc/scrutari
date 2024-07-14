import React from 'react'
import { IoIosStar } from "react-icons/io";

const Testimonials = () => {
  return (
    <div>
      {/* Testimonials section */}
      <section className='p-10 sm:px-20 md:px-28 lg:px-44 grid grid-cols-1 mt-16 xl:mx-32'>
        <div className='col-span-12 text-md rounded-3xl p-0.5 bg-gradient-to-r from-[#1CB5E0] to-[#000046] mx-auto'>
          <div className='rounded-[calc(1.5rem-2px)] bg-white p-2 text-center'>
              <h3 className='bg-gradient-to-r inline-block text-transparent bg-clip-text px-2 font-medium'>
                Testimonials
              </h3>
          </div>
        </div>

        <h1 className='col-span-12 mt-4 text-center font-bold text-3xl sm:text-4xl'>What our clients say about us</h1>
        <p className='col-span-12 mt-2 mx-10 text-center font-medium text-md sm:text-lg text-gray-700'>Discover what our satisfied colleagues have to say about their experiences with Scutari</p>

        {/* Start of the testimonial grid */}

        <div className='grid grid-cols-1 lg:grid-cols-3 mt-6 md:gap-4 gap-y-4'>
            <div className='relative overflow-hidden z-[-2]'>
              <img 
                src='https://plus.unsplash.com/premium_photo-1664475546048-b1e3768d2b14?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                className='brightness-50 rounded-lg shadow-lg h-full object-cover' 
                alt='Indonesian Muslim woman' />
              <div className='flex flex-col justify-end absolute top-0 left-0 p-10 sm:p-4 w-full h-full text-white text-left'>
                <div className='mb-14 sm:mb-3'>
                  <h1 className='font-bold text-8xl xl:text-7xl'>82%</h1>
                  <h3 className='text-md'>Happy clients</h3>
                </div>
                <div className='bg-blue-300 h-px w-28 sm:w-10'></div>
                <div className='mt-10 sm:mt-3'>
                  <h1 className='font-bold text-8xl xl:text-7xl'>92%</h1>
                  <h3 className='text-md'>Positive reviews</h3>
                </div>
              </div>
            </div>

            <div className='sm:col-span-2 inline-grid md:grid-cols-2 gap-4'>
              {/* start of Review 1 */}

              <div className='rounded-lg p-6 flex flex-col justify-start bg-gray-100'>
                <div className='flex text-yellow-500 text-xl'>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className='text-sm lg:text-xl font-semibold mt-2'>
                "The mentorship provided invaluable guidance, and presenting my findings at the conference boosted my confidence."
                </p>
                <div className='text-sm font-bold mt-4'>
                  <h3>Henry James A. Cortez</h3>
                  <h3 className=' text-gray-500'>Grade 4 Teacher (2020)</h3>
                </div>

                {/* End of Review 1 */}
              </div>


              <div className='bg-gradient-to-r from-[#1CB5E0] to-[#000046] rounded-lg p-6 text-gray-100'>
              <p className='text-sm lg:text-xl font-semibold mt-2'>
                "The resources on crafting research questions, finding credible sources, and building a strong thesis statement were invaluable."
                </p>
                <div className='text-sm font-bold mt-4'>
                  <h3>Pauline Louisse R. Singson</h3>
                  <h3 className='font-medium'>Kindergarten Teacher (2020)</h3>
                </div>
              </div>

              
              <div className='bg-gradient-to-r from-[#1CB5E0] to-[#000046] rounded-lg p-6 text-gray-100 order-last md:order-none'>
              <p className='text-sm lg:text-xl font-semibold mt-2'>
                "This program is a lifesaver for busy teachers who want to equip themselves strong research skills without sacrificing their precious time."
                </p>
                <div className='text-sm font-bold mt-4'>
                  <h3>Jessiah K. Soriano</h3>
                  <h3 className='font-medium'>Grade 6 Teacher (2020)</h3>
                </div>
              </div>


              {/* start of Review 4 */}

              <div className='rounded-lg p-6 flex flex-col justify-start bg-gray-100'>
                <div className='flex text-yellow-500 text-xl'>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className='text-sm lg:text-xl font-semibold mt-2'>
                "My mentor, Mrs. Deobell R. Macababbad, is a published researcher who patiently addressed my questions and provided insightful feedback on my research proposals."
                </p>
                <div className='text-sm font-bold mt-4'>
                  <h3>Clyde G. David</h3>
                  <h3 className=' text-gray-500'>Grade 1 Teacher (2020)</h3>
                </div>

                {/* End of Review 4 */}
              </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Testimonials
