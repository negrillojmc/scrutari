import React from 'react'
import Banner from './Banner'
import LiteratureBlogs from './LiteratureBlogs'
import LiteratureHighlightedTab from './LiteratureHighlightedTab'


const LiteratureFeedStructure = () => {
  return (
    <div>
      <main className='grid grid-cols-1 lg:grid-cols-3 p-10 sm:px-20 md:px-28 py-10 sm:gap-x-4 xl:mx-32'>
        <Banner />
        {/* <SearchBar /> */}
        {/* Category Bar Highlighting the tab "Introduction" */}
        <LiteratureHighlightedTab />
        <LiteratureBlogs />
      </main>
    </div>
  )
}

export default LiteratureFeedStructure
