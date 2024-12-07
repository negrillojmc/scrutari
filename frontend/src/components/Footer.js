import React from 'react'
import { Link } from 'react-router-dom'
import { GiOpenBook } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 sm:px-20 md:px-28 xl:px-22 grid grid-cols-1 sm:grid-cols-12 xl:mx-20">
        <div className="col-span-12 lg:col-span-3">
          <div className="flex font-bold text-2xl cursor-pointer items-center justify-center lg:justify-start">
            <span className="mr-1">
              <GiOpenBook />
            </span>
            <Link to="/">scrutari.</Link>
          </div>

          <div className="col-span-12 mt-6">
            <p className="text-center lg:text-left text-sm">
              The Leading Research Community of Isabelo Delos Reyes Elementary
              School
            </p>
            <p className="text-center lg:text-left text-sm mt-1">
              N. Zamora St., Tondo, Manila
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9 text-center font-bold text-lg my-6 lg:my-0">
          <div className="lg:inline-grid lg:grid-cols-6 text-center gap-x-6">
            <Link to="/about">
              <h2 className="mt-6 mx-auto lg:my-0">About</h2>
            </Link>
            <h2 className="mt-6 mx-auto lg:my-0">Process</h2>
            <Link to="/paths">
              <h2 className="mt-6 mx-auto lg:my-0">Paths</h2>
            </Link>
            <h2 className="mt-6 mx-auto lg:my-0">Services</h2>
            <h2 className="mt-6 mx-auto lg:my-0">Testimonials</h2>
            <h2 className="mt-6 mx-auto lg:my-0">Blog</h2>
          </div>
        </div>

        <div className="col-span-12 flex justify-center mt-6">
          <p>© 2024 Scrutari. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer
