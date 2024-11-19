import React, { useState } from 'react'
import { GiOpenBook } from "react-icons/gi";
import { ImMenu } from "react-icons/im";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Navbar = () => {
  let links = [
    {name: "Blog", link: "/blog"},
    // {name: "Library", link: "/library"},
    // {name: "Engagement", link: "/engagement"},
  ]

  let [open, setOpen ] = useState(false)
  return (
    <div className='shadow-sm w-full sticky top-0 left-0 px-20 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='flex font-bold text-2xl cursor-pointer items-center'>
          <span className='mr-1'>
            <GiOpenBook />
          </span>
          <Link to='/'>scrutari.</Link>
        </div>
        <div onClick={() => setOpen(!open)}>
          <div>
            {open ? (
              <RiCloseCircleFill className='text-2xl absolute right-8 top-6 md:hidden' />
            ) : (
              <ImMenu className='text-2xl absolute right-8 top-6 md:hidden' />
            )}
          </div>
        </div>
        <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            links.map((link) => (
              <li key={link.name} className='ml-8 text-lg md:my-0 my-7'>
                <Link to={link.link} className='text-gray-800 hover:text-gray-500 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
