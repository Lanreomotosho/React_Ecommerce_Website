import React from 'react';
import { Link } from 'react-router-dom';

import brand1 from "/public/images/brand/brand1.png";
import brand2 from "/public/images/brand/brand2.png";
import brand3 from "/public/images/brand/brand3.png";
import brand4 from "/public/images/brand/brand4.png";
import brand5 from "/public/images/brand/brand5.png";


const Category = () => {
  const brandImages = [
    { id: 1, src: brand1, alt: 'brand1' },
    { id: 2, src: brand2, alt: 'brand2' },
    { id: 3, src: brand3, alt: 'brand3' },
    { id: 4, src: brand4, alt: 'brand4' },
    { id: 5, src: brand5, alt: 'brand5' },
  ];

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      {/* brand logo */}
      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
        {brandImages.map(({ id, src, alt }) => (
          <div key={id}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>
          Explore new and popular styles
        </p>
        <div>
          <Link to=".">
            <img
              src="/images/image1.png"
              alt=""
              className='w-full hover:scale-105 transition-all duration-300'
            />
          </Link>
        </div>

        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-2'>
            <Link to="/">
              <img
                src="/images/image2.png"
                alt=""
                className='w-full hover:scale-105 transition-all duration-200'
              />
            </Link>
            <Link to="/">
              <img
                src="/images/image3.png"
                alt=""
                className='w-full hover:scale-105 transition-all duration-200'
              />
            </Link>
            <Link to="/">
              <img
                src="/images/image4.png"
                alt=""
                className='w-full hover:scale-105 transition-all duration-200'
              />
            </Link>
            <Link to="/">
              <img
                src="/images/image5.png"
                alt=""
                className='w-full hover:scale-105 transition-all duration-200'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
