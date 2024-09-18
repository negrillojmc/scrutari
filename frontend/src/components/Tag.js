import React from 'react'

const Tag = ({ tag }) => {
  return (
    <div className='bg-black text-white rounded-full px-2 py-1 inline-block'>
      <h3 className='text-xs font-semibold'>{tag}</h3>
    </div>
  )
}

export default Tag
