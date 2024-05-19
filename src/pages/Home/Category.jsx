import React from 'react'
import { Link } from 'react-router-dom';

import brand1 from "/public/images/brand/brand1.png";
import brand2 from "/public/images/brand/brand2.png";
import brand3 from "/public/images/brand/brand3.png";
import brand4 from "/public/images/brand/brand4.png";
import brand5 from "/public/images/brand/brand5.png";



// Run only once after component mount


const companyLogo = [
    {id: 1, img: "/public/images/brand/brand1.png"},
    {id: 2, img: "/public/images/brand/brand2.png"},
    {id: 3, img: "/public/images/brand/brand3.png"},
    {id: 4, img: "/public/images/brand/brand4.png"},
    {id: 5, img: "/public/images/brand/brand5.png"},
]






const Category = () => {


  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
  {/* brand logo */}
  <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
   {
    companyLogo.map(({id, img}) => (
     <div key={id}>
      <img src={brand1} alt='brand1' />
      <img src={brand2} alt='brand2' />
      <img src={brand3} alt='brand3' />
      <img src={brand4} alt='brand4' />
      <img src={brand5} alt='brand5' />
    </div>
    ))
        }
  </div>


  {/* category grid */}
  <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
  <p className='font-semibold uppercase  md:-rotate-90  text-center bg-black text-white md:p-1.5 p-2
  rounded-sm inline-flex'>
  Explore new and popular styles
  </p>
  <div>
 <Link to="."><img src="/images/image1.png" alt="" className='w-full hover:scale-105
 transition-all duration-300' /></Link>
  </div>

<div className='md:w-1/2'>
<div className='grid grid-cols-2 gap-2'>
<Link to="/"> <img src="/public/images/image2.png" alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
<Link to="/"> <img src="/public/images/image3.png" alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
<Link to="/"> <img src="/public/images/image4.png" alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
<Link to="/"> <img src="/public/images/image5.png" alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
</div>
</div>
  </div>
  </div>
  )
}


export default Category;