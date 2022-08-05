import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Parallax, Navigation } from 'swiper';

export default function Carousel() {
  return (
    <>
      <Swiper
        style={{
          height: '600px',
          borderRadius: '10px',
          marginTop: '20px',
        }}
        speed={600}
        parallax={true}
        navigation={true}
        modules={[Parallax, Navigation]}
        className='mySwiper'
      >
        <div
          slot='container-start'
          className='parallax-bg'
          style={{
            'background-image':
              'url(https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlYWwlMjBlc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2500&q=60)',
          }}
          data-swiper-parallax='-23%'
        ></div>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            Slide 1
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            Subtitle
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum
              mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet
              justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
              laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam
              hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
              Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
              Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            Slide 2
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            Subtitle
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum
              mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet
              justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
              laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam
              hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
              Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
              Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            Slide 3
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            Subtitle
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum
              mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet
              justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
              laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam
              hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
              Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
              Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
