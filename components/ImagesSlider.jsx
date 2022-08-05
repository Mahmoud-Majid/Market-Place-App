import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper';
import { Box } from '@chakra-ui/react';
import Card from './Card';
import useWindowSize from '../utils/useWindowSize';

export default function ImagesSlider({ propsForSale }) {
  const { width } = useWindowSize();
  return (
    <Box>
      <Swiper
        slidesPerView={
          width > 1200 ? '4' : width > 1000 ? '3' : width > 576 ? '2' : '1'
        }
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
