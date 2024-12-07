import React from 'react'

const CoverPic = ({text, imageSrc, altText}) => {
  return (
    <section className="relative">
    <div className="z-0 h-96">
      <img
        src={imageSrc}
        alt={altText}
        className="brightness-50 rounded-2xl shadow-lg object-cover object-center h-4/5 w-full"
      />
      <div className="absolute top-0 left-0 flex items-center justify-center h-4/5 w-full z-10">
        <h1 className="text-white text-3xl font-medium">{text}</h1>
      </div>
    </div>
  </section>
  )
}

export default CoverPic
