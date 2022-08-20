import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// import required modules
import { Navigation } from 'swiper';

export default function ImageSrollbar({ data }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {data.map((item) => (
          <SwiperSlide>
            <Image
              placeholder='blur'
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
