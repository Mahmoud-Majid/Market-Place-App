import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper';
import YouTubeVideo from './YouTubeVideo';
import { Box } from '@chakra-ui/react';

const videos = [
  'hxEUblpGbOI',
  '7o2UsxMn64o',
  'AuZx10OYUEg',
  'QxmMyqtjnDc',
  'aqjD4o3DnNI',
  'kcxWAKD-3Rw',
  'DD7nVTbFbfo',
  'DD7nVTbFbfo',
];
export default function VideoSlider() {
  return (
    <Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
        style={{ background: 'transparent' }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <YouTubeVideo id={video} height={200} width={350} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
