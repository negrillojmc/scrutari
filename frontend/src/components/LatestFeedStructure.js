import React from 'react'
import Banner from './Banner'
import LatestHighlightedTab from './LatestHighlightedTab'
import LatestBlogs from './LatestBlogs'
// import SearchBar from '../components/SearchBar'


const LatestFeedStructure = () => {
  return (
    <div>
      <main className='grid grid-cols-1 lg:grid-cols-3 p-10 sm:px-20 md:px-28 py-10 sm:gap-x-4 xl:mx-32'>
        <Banner />
        {/* <SearchBar /> */}
        <LatestHighlightedTab />
        <LatestBlogs />
      </main>
    </div>
  )
}

export default LatestFeedStructure
