import React from 'react'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

const Blog = () => {
  return (
    <div>
      <main className='grid grid-cols-1 sm:grid-cols-12 p-10 sm:px-20 md:px-28 lg:px-44 py-10 sm:gap-x-4 xl:mx-32'>
        <Banner />
        <SearchBar />
        <Categories />

        
      </main>
    </div>
  )
}

export default Blog
