import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, ScaleFade, SimpleGrid } from '@chakra-ui/react';

// import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import VideoSlider from '../components/VideoSlider';
import VideoBanner from '../components/VideoBanner';
import ImagesSlider from '../components/ImagesSlider';


export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300}
      onMouseOver={(e) => {
        e.target.style.transition = 'scale 0.5s ease-in-out';
      }
      }
      onMouseOut={(e) => {
        e.target.style.opacity = 1;
      }
      }
    />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);


const Home = ({ propertiesForSale, propertiesForRent }) => (
  <>
    <Box >
      <Carousel />
      <Categories />
      <ImagesSlider propsForSale={propertiesForSale} />
      <VideoSlider />
      <VideoBanner />
    </Box>
  </>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
