import React from 'react'
import Banner from '../components/Banner'
// import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import Feed from './blog/Feed'

const Blog = () => {
  return (
    <div>
      <main className='grid grid-cols-1 lg:grid-cols-3 p-10 sm:px-20 md:px-28 py-10 sm:gap-x-4 xl:mx-32'>
        <Banner />
        {/* <SearchBar /> */}
        <Categories />
        <Feed />
      </main>
    </div>
  )
}

export default Blog
