import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {


  return (
    <div className='col-span-1 sm:col-span-12 flex flex-wrap items-center justify-center gap-2'>
        <button className='bg-black text-white px-4 py-2 rounded-3xl text-sm font-bold'>
            <Link to="/blog">Latest</Link>
        </button>
        <button className='border border-black text-black px-4 py-2 rounded-3xl text-sm'>
            <Link to="/blog/introduction">Introduction</Link>
        </button>
        <button className='border border-black text-black px-4 py-2 rounded-3xl text-sm'>
            <Link to="/blog/literature">Literature</Link>
        </button>
        <button className='border border-black text-black px-4 py-2 rounded-3xl text-sm'>
            <Link to="/blog/methodology">Methodology</Link>
        </button>
        <button className='border border-black text-black px-4 py-2 rounded-3xl text-sm'>
            <Link to="/blog/analysis">Analysis</Link>
        </button>
    </div>
  )
}

export default Categories
