import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper';
import { Box } from '@chakra-ui/react';
import Card from './Card';

const IMAGES = [
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlYWwlMjBlc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2500&q=60',
  // 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlYWwlMjBlc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2500&q=60',
];

export default function ImagesSlider({ propsForSale }) {
  return (
    <Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
        style={{
          background: 'transparent',
          height: '400px',
          marginTop: '80px',
          marginBottom: '80px',
          // padding: '0px',
        }}
      >
        {propsForSale.map((prop, index) => (
          <SwiperSlide
            key={index}
            style={{
              marginLeft: '-50px',
              marginRight: '-50px',
            }}
          >
            <Card image={prop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
