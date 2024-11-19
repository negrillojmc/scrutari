import React from 'react'
import Banner from './Banner'
import IntroductionHighlightedTab from './IntroductionHightlightedTab'
import IntroductionBlogs from './IntroductionBlogs'


const IntroductionFeedStructure = () => {
  return (
    <div>
      <main className='grid grid-cols-1 lg:grid-cols-3 p-10 sm:px-20 md:px-28 py-10 sm:gap-x-4 xl:mx-32'>
        <Banner />
        {/* <SearchBar /> */}
        {/* Category Bar Highlighting the tab "Introduction" */}
        <IntroductionHighlightedTab />
        <IntroductionBlogs />
      </main>
    </div>
  )
}

export default IntroductionFeedStructure
