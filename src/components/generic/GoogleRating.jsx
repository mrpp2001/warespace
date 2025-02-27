import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdStar, MdOutlineStar } from 'react-icons/md'

const GoogleRating = () => {
  return (
    <div className="flex gap-1 items-center text-xl bg-white w-fit p-1.5 rounded-lg">
      <FcGoogle />
      {[...Array(4)].map((_, i) => (
        <MdStar key={i} className="text-[#E6A53B]" />
      ))}
      <div className="relative">
        <MdOutlineStar 
          className="text-[#E6A53B] absolute top-0 left-0" 
          style={{ clipPath: 'inset(0 0 0 80%)' }}
        />
      </div>
      <p className='text-xs'>(4.8/5)</p>
    </div>
  )
}

export default GoogleRating