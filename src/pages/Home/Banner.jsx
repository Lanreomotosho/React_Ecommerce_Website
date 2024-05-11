import React from 'react'
import bannerImg from "../images/banner.png"

export const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
<div>
<div className='md:w-1/2'>
<h1 className='text-5'>

</h1>
    </div>

    <div className='md:w-1/2'>
        <img src={bannerImg} alt='' />
    </div>

</div>
    </div>
  )
}
