import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useBoolean,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Card({ image }) {
  const [flag, setFlag] = useBoolean();

  return (
    <Center py={11} slot='container-start' className='parallax-bg'>
      <Box
        role={'group'}
        p={6}
        maxW={'230px'}
        maxH={'280px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'200px'}
          mb={2}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image.coverPhoto.url})`,
            filter: 'blur(10px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(25px)',
            },
          }}
        >
          <Link href={`/property/${image.externalID}`} passHref>
            <Image
              rounded={'lg'}
              height={'full'}
              width={282}
              scale={flag ? 1.1 : 1}
              objectFit={'cover'}
              src={image.coverPhoto.url}
              onMouseEnter={setFlag.on}
              onMouseLeave={setFlag.off}
              style={{
                transform: `${flag ? `scale(1.1)` : `scale(1)`}`,
                transition: 'all .3s ease',
              }}
            />
          </Link>
        </Box>
        <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='blue'>
          Sale
        </Badge>
        <Text color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
          {image.title.slice(0, 30) + '...'}
        </Text>
        <Text as={'span'} color={'black'} fontWeight={800} fontSize={'lg'}>
          {image.price}
        </Text>
      </Box>
    </Center>
  );
}
