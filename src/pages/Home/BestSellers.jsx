import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BestSellers = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json").then(res => res.json()).then(data => console.log(data))
    },  [])
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
       <div className='text-center'>
        <h2 className='title'>
            Best Sellers
        </h2>
        <p className='text-Black/75 capitalize md:w-2/3 mx-auto mb-8' >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per 
        </p>
       </div>

       {/* best seller products card */}
       <div className='mb-16'>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
       </div>


       </div>
  )
}

export default BestSellers