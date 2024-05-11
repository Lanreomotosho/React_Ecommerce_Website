import React from 'react'
import bannerImg from "/images/banner.png"

export const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
<div>
<div className='md:w-1/2'>
<h1 className='text-5x1 font-light mb-5'>Collections
</h1>

<p className='text-xl mb-7'>
you can explore ans shop many differnt collection
from various barands here.
</p>
<button className=''>
    Shop Now
</button>
    </div>

    <div className='md:w-1/2'>
        <img src={bannerImg} alt='' />
    </div>

</div>
    </div>
  )
}
