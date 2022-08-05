import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import YouTubeVideo from './YouTubeVideo';
import YouTube from 'react-youtube';

export default function VideoBanner() {
  return (
    <Center my={100}>
      <Stack
        borderWidth='1px'
        borderRadius='lg'
        w={{ sm: '100%', md: '100%', lg: '60%' }}
        height={{ sm: '476px', md: '25rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex bg='blue.200' boxSize={'100%'}>
          {/* <YouTubeVideo id='7o2UsxMn64o' height={'100%'} width={'100%'} /> */}
          <YouTube
            className='youtube'
            videoId='QxmMyqtjnDc'
            opts={{ height: '100%', width: '100%' }}
            // onReady={onReady}
          />
        </Flex>
        <Stack
          w={{ base: '100%', sm: '100%', md: '100%', lg: '40%' }}
          // flex={1}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Real Estate no.1
          </Heading>
          <Text
            fontWeight={'bold'}
            size='sm'
            mb={4}
            pb={6}
            textAlign='justify'
            style={{ width: '70%', borderBottom: '2px solid #4299e1' }}
          >
            Lorem ipsum dolor sit amet asdas consectetur, adipisicing elit.
            Tempore cupiditate debitis non ut inventore
          </Text>
          <Text
            textAlign={'justify'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            as='cite'
          >
            "Lorem ipsum dolor sit amet consectetur adipisicing asd elit.
            Temporaasd asd sit assumenda, repellendus tenetur reiciendis quia
            maxime doloribus ullam architecto corporis"
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #rent
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #sale
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #real_estate
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          ></Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
